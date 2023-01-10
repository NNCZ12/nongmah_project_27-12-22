import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {camelize} from './lib/String';
import {makeCancelable} from './lib/cancelablePromise';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
