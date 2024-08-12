import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import loader from "./loader";

export default combineReducers({
  auth,
  message,
  loader,
  
});
