import { createStore, applyMiddleware } from "redux";
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from './reducers'
import axios from "axios";
import "../mocks"
import reducer from "./reducers"


 export default () => {
  const store = (window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore)(reducer);
    return store
      
}  