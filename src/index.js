import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App_57 from "./App_57";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App_57 />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
