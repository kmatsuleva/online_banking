import React from "react";
import { render } from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import { Provider } from "react-redux";
import App from "./App";
import rootReducer from "./store/reducers";
import axiosMiddleware from 'redux-axios-middleware';
import { client } from "./components/Pages/LoginPage/LoginPage"

export const store = createStore(
  rootReducer,
  applyMiddleware(
    axiosMiddleware(client)
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
