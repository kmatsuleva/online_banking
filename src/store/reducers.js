import { combineReducers } from "redux";
import accounts from "../reducers/bank_accounts";
import auth from "../reducers/auth";
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  accounts,
  auth,
  form: reduxFormReducer
});
