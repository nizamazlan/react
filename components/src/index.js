import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx"
import {add, multiply, divide} from "./calc.jsx"


ReactDOM.render(
  <div>
    <ul>
      <li>{add(1,2)}</li>
      <li>{multiply(2,3)}</li>
      <li>{divide(5,2)}</li>
    </ul>
  <App/>
  </div>,
  document.getElementById('root')
);
