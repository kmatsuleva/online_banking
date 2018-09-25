import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from './store/reducers'
import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import "./mocks"

const store = createStore(
  rootReducer,
  applyMiddleware(
    axiosMiddleware(axios)
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
