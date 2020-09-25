import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS,DELETE_SURVEYS } from "./types";

// redux-thunk will automatically pass dispatch function
// as an argument if the return statement is a function
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/surveys", values);
  // redirect to the "/surveys" route
  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const deleteSurvey = ({_id, _user}) => async (dispatch) => {
  // console.log("values:",values)
  const res = await axios.post("/api/surveys/delete",{_id, _user});
  dispatch({ type: DELETE_SURVEYS, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("/api/surveys");
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
