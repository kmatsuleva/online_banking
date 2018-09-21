import { createStore, applyMiddleware } from "redux";
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from './reducers'
import axios from "axios";
import "../mocks"

 export default () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(
          axiosMiddleware(axios)
        )
      );
      
    return store
      
}  