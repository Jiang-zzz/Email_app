import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import App from "./components/App";
import reducers from "./reducers";

//for testing email object
// import axios from 'axios';
// window.axios = axios;

/*
const survey = {title:'my title',subject:"my subject", recipients:'test@email.com',body:'heres the body of the email'};
axios.post('/api/surveys', survey);

*/

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
// console.log('stripe key is', process.env.REACT_APP_STRIPE_KEY)
// console.log('Environment is', process.env.NODE_ENV)