import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./Reducer";

const store = createStore(Reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
