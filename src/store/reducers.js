import { combineReducers } from "redux";
import accounts from "../reducers/bank_accounts";
import auth from "../reducers/auth";

export default combineReducers({
  accounts,
  auth
});
