The front end is here https://github.com/YIZHUANG/PayPerMail_frontend

Heroku demo : https://paypermail.herokuapp.com

Build with ReactJs as the front-end. Node.js as back-end, and mongoDb as the
database.


## Features


```
$ User can log in either using google or username and password with session going.  (that includs sign up and hashing the password)
```

```
$ Payment  (pls use credit card number 42424242424242)
User can pay for the credits top-up using Stripe api, after paying, the amount of balance they top-up will be shown instantly and saved to the database.
```

```
$ Send emails and recipients give feedback.
User can choose email template, and send to many different recipients. (with middleware making sure the user is logged in and has enough balance in their accounts. )

Recipient clicks like or dislike in the emails recieved , all feedback results will be saved to the database for the specific email.
```

```
$ Display list of emails sends with content as well as showing all the recipients with specific details. (whether they have responded and like or dislike)
```

```
$Delete records.
```
