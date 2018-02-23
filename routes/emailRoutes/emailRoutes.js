const _ = require("lodash");
const Path = require("path-parser");
const { URL } = require("url");
const mongoose = require("mongoose");
const requireLogin = require("../../middlewares/requireLogin"); //middleware that make sure  the user is lodgged in.
const requireCredits = require("../../middlewares/requireCredits"); //middleware that make sure  the user has enough credits
const Mailer = require("../../services/Mailer"); // sendgrid boilerplate stuff
const Email = mongoose.model("email");
const EmailTemplate = require("../../services/emailTemplates/EmailTemplate");

module.exports = app => {
  app.get("/api/emails", requireLogin, async (req, res) => {
    const emails = await Email.find({ _user: req.user.id }) //fetch all the emails that the current log in user has sent.
      .select({ recipients: false }); //exclude the recipients property,cause there could be too many.

    res.send(emails);
  });

  app.get("/api/recipients/:id", async (req, res) => {
    const emails = await Email.find({ _id: req.params.id }) //fetch all the emails that the current log in user has sent.
      .select({ recipients: true }); //exclude the recipients property,cause there could be too many.
    res.send(emails);
  });

  app.get("/api/emails/:emailId/:choice", (req, res) => {
    res.send("You have a nice day!");
  });

  app.delete("/api/emails/:id", (req, res) => {
    Email.findOne({ _id: req.params.id }, (error, result) => {
      if (error) {
        res.status(500).send("could not find emails");
      } else {
        Email.deleteOne({ _id: req.params.id }, (error, result) => {
          if (error) {
            res.status(500).send("could not delete emails");
          } else {
            res.status(200).send("deleted!");
          }
        });
      }
    });
  });

  app.post("/api/emails", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const email = new Email({
      title,
      subject,
      body, //an array of objects to a list of objects
      recipients: recipients.split(",").map(email => ({ email: email.trim() })), //same as return {email:email}
      _user: req.user.id,
      creationDate: Date.now()
    });
    //send emails from here
    const templeNumber = parseInt(req.body.templeNumber);

    const mailer = new Mailer(email, EmailTemplate(email, templeNumber));
    try {
      //for every set of emails sent, do the following.
      const creditsToBeDeducted = email.recipients.length; //based on the amount of emails sent.
      await mailer.send();
      await email.save();
      req.user.credits -= 1 * creditsToBeDeducted;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post("/api/emails/webhooks", (req, res) => {
    //feedback route
    const p = new Path("/api/emails/:emailId/:choice"); // to extract the url and yes/no that are needed.
    // don't need other stuff other than the email id and yes or not;
    _.chain(req.body) //chain function from lodash to cut off repetitive stuff.
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          //it is better to understand the logic that i don't  refactor the codes below
          return {
            email,
            emailId: match.emailId,
            choice: match.choice
          };
        }
      })
      .compact() //remove anything that are undefined
      .uniqBy("email", "emailId") //remove anything that are duplicate.
      .each(({ emailId, email, choice }) => {
        Email.updateOne(
          {
            _id: emailId,
            recipients: {
              $elemMatch: { email: email, responded: false } //find only one that matches the criteias.
            }
          },
          {
            $inc: { [choice]: 1 }, //increment.
            $set: { "recipients.$.responded": true }, //set
            lastResponded: new Date()
          }
        ).exec();
      })
      .value();

    res.send({}); //does not matter.
  });
};
