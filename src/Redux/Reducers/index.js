/* @flow */

import { combineReducers } from "redux";

import Sidebar from "./Sidebar";
import Tutor from "./Tutor";
import Core from "./Core";
import Auth from "./Auth";

export default combineReducers({
  Sidebar,
  Tutor,
  Core,
  Auth,
});
