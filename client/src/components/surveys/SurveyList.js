import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys, deleteSurvey } from "../../actions";
import Modal from "./SurveyModal";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  state = { modalOpen: false };
  switchModalState() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }
  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
            <Modal
              survey={survey}
              open={this.state.modalOpen}
              onClose={() => this.switchModalState()}
              onDelete={() => {
                this.switchModalState();
                this.props.deleteSurvey(survey);
              }}
            />
          </div>
          <div className="card-action">
            <a href="#">Yes:{survey.yes}</a>
            <a href="#">No:{survey.no}</a>

            <a
              href="#"
              style={{ display: "inline" }}
              className="btn-floating orange btn-small right"
              onClick={() => {
                this.setState({ modalOpen: true });
              }}
            >
              <i className="material-icons">delete_forever</i>
            </a>
            {/* <a
              href="#"
              style={{ display: "inline" }}
              className="btn-floating orange btn-small right"
              onClick={()=>this.props.deleteSurvey(survey)}
            >
              <i className="material-icons">delete_forever</i>
            </a> */}
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps(state) {
  return { surveys: state.surveys };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(
  SurveyList
);
