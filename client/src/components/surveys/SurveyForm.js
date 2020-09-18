import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";

const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Email Body", name: "Body" },
  { label: "Recipient List", name: "emails" },
];
class SurveyForm extends Component {
  renderField() {
    return FIELDS.map(({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  render() {
    //onSurveySubmit is a callback function from SurveyNew.js
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          {this.renderField()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  // reduxForm requires an empty object to proceed
  // so by default we return an empty errors
  //if there is an error, we add the key of error field to errors
  const errors = {};
  // if nothing provided, give an empty string as reduxForm will run it once when the site loads up
  errors.emails = validateEmails(values.emails || "");
  // if the user give nothing, the below error will overide
  FIELDS.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

export default reduxForm({
  validate: validate,
  form: "surveyForm",
})(SurveyForm);
