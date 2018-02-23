const keys = require("../../config/keys");

module.exports = (Email, templeNumber) => {
  switch (templeNumber) {
    case 1:
      return `
      <html>
        <head>
      <meta name="viewport" content="width=device-width" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Title</title>
      <style>
      img {
      border: none;
      -ms-interpolation-mode: bicubic;
      max-width: 100%; }

      body {
      background-color: #f6f6f6;
      font-family: sans-serif;
      -webkit-font-smoothing: antialiased;
      font-size: 14px;
      line-height: 1.4;
      margin: 0;
      padding: 0;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%; }

      table {
      border-collapse: separate;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      width: 100%; }
      table td {
        font-family: sans-serif;
        font-size: 14px;
        vertical-align: top; }
      .body {
      background-color: #f6f6f6;
      width: 100%; }
      .container {
      display: block;
      Margin: 0 auto !important;
      /* makes it centered */
      max-width: 580px;
      padding: 10px;
      width: 580px; }
      .content {
      box-sizing: border-box;
      display: block;
      Margin: 0 auto;
      max-width: 580px;
      padding: 10px; }
      .main {
      background: #ffffff;
      border-radius: 3px;
      width: 100%; }

      .wrapper {
      box-sizing: border-box;
      padding: 20px; }

      .content-block {
      padding-bottom: 10px;
      padding-top: 10px;
      }
      .footer {
      clear: both;
      Margin-top: 10px;
      text-align: center;
      width: 100%; }
      .footer td,
      .footer p,
      .footer span,
      .footer a {
        color: #999999;
        font-size: 12px;
        text-align: center; }
      h1,
      h2,
      h3,
      h4 {
      color: #000000;
      font-family: sans-serif;
      font-weight: 400;
      line-height: 1.4;
      margin: 0;
      Margin-bottom: 30px; }

      h1 {
      font-size: 35px;
      font-weight: 300;
      text-align: center;
      text-transform: capitalize; }

      p,
      ul,
      ol {
      font-family: sans-serif;
      font-size: 14px;
      font-weight: normal;
      margin: 0;
      Margin-bottom: 15px; }
      p li,
      ul li,
      ol li {
        list-style-position: inside;
        margin-left: 5px; }

      a {
      color: #3498db;
      text-decoration: underline; }
      .btn {
      box-sizing: border-box;
      width: 100%; }
      .btn > tbody > tr > td {
        padding-bottom: 15px; }
      .btn table {
        width: auto; }
      .btn table td {
        background-color: #ffffff;
        border-radius: 5px;
        text-align: center; }
      .btn a {
        background-color: #ffffff;
        border: solid 1px #3498db;
        border-radius: 5px;
        box-sizing: border-box;
        color: #3498db;
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        font-weight: bold;
        margin: 0;
        padding: 12px 25px;
        text-decoration: none;
        text-transform: capitalize; }
      .btn-primary table td {
      background-color: #3498db; }
      .btn-primary a {
      background-color: #3498db;
      border-color: #3498db;
      color: #ffffff; }
      .last {
      margin-bottom: 0; }
      .first {
      margin-top: 0; }
      .align-center {
      text-align: center; }
      .align-right {
      text-align: right; }
      .align-left {
      text-align: left; }
      .clear {
      clear: both; }
      .mt0 {
      margin-top: 0; }
      .mb0 {
      margin-bottom: 0; }
      .preheader {
      color: transparent;
      display: none;
      height: 0;
      max-height: 0;
      max-width: 0;
      opacity: 0;
      overflow: hidden;
      mso-hide: all;
      visibility: hidden;
      width: 0; }
      .powered-by a {
      text-decoration: none; }
      hr {
      border: 0;
      border-bottom: 1px solid #f6f6f6;
      Margin: 20px 0; }
      @media only screen and (max-width: 620px) {
      table[class=body] h1 {
        font-size: 28px !important;
        margin-bottom: 10px !important; }
      table[class=body] p,
      table[class=body] ul,
      table[class=body] ol,
      table[class=body] td,
      table[class=body] span,
      table[class=body] a {
        font-size: 16px !important; }
      table[class=body] .wrapper,
      table[class=body] .article {
        padding: 10px !important; }
      table[class=body] .content {
        padding: 0 !important; }
      table[class=body] .container {
        padding: 0 !important;
        width: 100% !important; }
      table[class=body] .main {
        border-left-width: 0 !important;
        border-radius: 0 !important;
        border-right-width: 0 !important; }
      table[class=body] .btn table {
        width: 100% !important; }
      table[class=body] .btn a {
        width: 100% !important; }
      table[class=body] .img-responsive {
        height: auto !important;
        max-width: 100% !important;
        width: auto !important; }}

      @media all {
      .ExternalClass {
        width: 100%; }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%; }
      .apple-link a {
        color: inherit !important;
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        text-decoration: none !important; }
      .btn-primary table td:hover {
        background-color: #34495e !important; }
      .btn-primary a:hover {
        background-color: #34495e !important;
        border-color: #34495e !important; } }

      </style>
      </head>
      <body class="">
      <table border="0" cellpadding="0" cellspacing="0" class="body">
      <tr>
      <td>&nbsp;</td>
      <td class="container">
        <div class="content">
          <table class="main">
            <tr>
              <td class="wrapper">
                <table border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td>
                      <p>Hi there,</p>
                      <p>${Email.body}</p>
                      <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                       <tbody>
                         <tr>
                           <td align="left">
                             <table border="0" cellpadding="0" cellspacing="0">
                               <tbody>
                                 <tr>
                                   <td> <a href="${
                                     keys.redirectDomain
                                   }/api/emails/${Email.id}/like">like</a></td>
                                 </tr>
                                 <tr>
                                   <td> <a href="${
                                     keys.redirectDomain
                                   }/api/emails/${
        Email.id
      }/dislike">dislike</a> </td>
                                 </tr>
                               </tbody>
                             </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <div class="footer">
            <table border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td class="content-block">
                  <span class="apple-link">Google,00530,New york, San Francisco CA 94102</span>
                </td>
              </tr>
              <tr>
                <td class="content-block powered-by">
                  Powered by <a href="http://google.com">PayPerMail</a>.
                </td>
              </tr>
            </table>
          </div>
        </div>
      </td>
      <td>&nbsp;</td>
      </tr>
      </table>
      </body>
      </html>
`;
    case 2:
      return `<html>
<head>
<meta charset="UTF-8">
<title>Simple Responsive HTML Email Template</title>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
<style>
    *{
        box-sizing: border-box;
        -moz-box-sizing: border-box;
    }
    html,body{
        background: #eeeeee;
        font-family: 'Open Sans', sans-serif, Helvetica, Arial;
    }
    img{
        max-width: 100%;
    }
    /* This is what it makes reponsive. Double check before you use it! */
    @media only screen and (max-width: 480px){
        table tr td{
            width: 100% !important;
            float: left;
        }
    }
</style>
</head>
<body style="background: #eeeeee; padding: 10px; font-family: 'Open Sans', sans-serif, Helvetica, Arial;">
<center>
<p style="text-align: center; color: #666666; font-size: 12px; margin: 10px 0;">
    If you can't see this message <a href="#" target="_blank">View it in your browser</a>.
</p>
<table width="100%" cellpadding="0" cellspacing="0" bgcolor="FFFFFF" style="background: #ffffff; max-width: 600px !important; margin: 0 auto; background: #ffffff;">
    <tr>
        <td style="padding: 20px; text-align: center; background: #76ce3e;">
            <h1 style="color: #ffffff">A Simple HTML Email Template</h1>
        </td>
    </tr>
    <tr>
        <td style="padding: 20px; text-align: center;">
            <!-- ** 100% width
            ----------------------------------->
            <p style="font-size:30px; margin: 5px;">100% width table</p>
            <p>${Email.body}</p>
            <p style="border-radius: 40px; -moz-border-radius: 40px; padding: 15px 20px; margin: 10px auto; background: #76ce3e; display: inline-block;">
                <a href="tel:8888888888" style="color: #fff; text-decoration: none;">Call Us (888) 888-8888</a>
            </p>
        </td>
    </tr>
    <tr>
        <td>
            <img src="http://www.ohsikpark.com/samples/email/sf.jpg" />
        </td>
    </tr>
    <tr>
        <td style="padding: 20px;">
            <table border="0" cellpadding="0">
                <tr>
                    <td width="30%" style="width: 30%; padding: 10px;">
                        <img src="http://www.ohsikpark.com/samples/email/profile.jpg" />
                    </td>
                    <td width="70%" style="width: 70%; padding: 10px; text-align: left;">
                        <h3>Say Something | 70% width</h3>
                        <p>${Email.body}.</p>
                        <p style="color: #666666; font-size: 12px;">Small Font Sample</p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td style="padding: 20px; background: #2B2E34;">

            <table border="0" cellpadding="0" cellspacing="0" a>
                <tr>
                    <td width="50%" style="width: 50%; padding: 10px; color: #ffffff; text-align: left;" valign="top">
                        <h2>About us</h2>
                        <p style="font-size: 14px;">${Email.body}</p>
                    </td>
                    <td width="50%" style="width: 50%; padding: 10px; color: #ffffff; text-align: left;" valign="top">
                        <h2>Contact us</h2>
                        <table border="0" style="font-size: 14px;">
                            <tr>    <a href="${
                              keys.redirectDomain
                            }/api/emails/${Email.id}/like">Like</a>
                              </div>
                            <div>
                              <a href="${keys.redirectDomain}/api/emails/${
        Email.id
      }/dislike">Dislike</a></td></tr>
                        </table>
                    </td>
                </tr>
            </table>

        </td>
    </tr>
</table>
<p style="text-align: center; color: #666666; font-size: 12px; margin: 10px 0;">
    Copyright © 2015. All&nbsp;rights&nbsp;reserved.<br />
    If you do not want to recieve emails from us, you can <a href="#" target="_blank">unsubscribe</a>.
</p>

</center>

</body>
</html>`;
    default:
      return `
      <html>
        <body>
          <div style="text-align:center;">
            <h3>This is sadadad</h3>
            <p>Pleasasse</p>
            <p>${Email.body}</p>
            <div>
              <a href="${keys.redirectDomain}/api/emails/${
        Email.id
      }/like">Yes</a>
            </div>
          <div>
            <a href="${keys.redirectDomain}/api/emails/${
        Email.id
      }/dislike">no</a>
          </div>
        </body>
      </html>
      `;
  }
};
