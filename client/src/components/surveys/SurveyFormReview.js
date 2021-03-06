import React, { useState } from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

// "history" is provided by withRouter
// https://reactrouter.com/core/api/withRouter

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const fieldsList = formFields.map(({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  const [surveySend, setSurveysent] = useState(false);

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {fieldsList}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => {
          if (!surveySend) {
            setSurveysent(true);
            submitSurvey(formValues, history);
          }
        }}
        className="green btn-flat right white-text"
      >
        Send SurveyFormReview
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  //  console.log(state);
  return { formValues: state.form.surveyForm.values };
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
