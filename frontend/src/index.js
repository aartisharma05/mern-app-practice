import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Data from "./Data";
import Form from "./Form";
import FetchData from "./FetchData";
import MultipleReturn from "./MultipleReturn";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Data /> */}
    {/* <Form /> */}
    {/* <FetchData /> */}
    <MultipleReturn />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
