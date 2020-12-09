import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  // MUI may not support strict mode. Need to check.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
