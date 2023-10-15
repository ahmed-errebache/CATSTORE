import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./style.css";
import "./all.min.css";
import App from "./App";

const root = document.getElementById("root");

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  root
);
