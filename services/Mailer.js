const sengrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

class Mailer extends helper.Mail {
    constructor ({suject, recipients}, content){
        super();

    }
}
