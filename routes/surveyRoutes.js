const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/.Mailer");
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')
const Survey = mongoose.model("surveys");

module.exports = (app) => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      // es6 syntax
      title,
      subject,
      body,
      recipients: recipients
        .split(",")
        .map((email) => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });
    // sent the email
    const mailer = new Mailer(survey, surveyTemplate(survey));
  });
};
