import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Movies from "./components/movies";
import reportWebVitals from "./reportWebVitals";
import Counter from "./components/counter";
import Counters from "./components/counters.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Counters />
    </React.StrictMode>
);

// ReactDOM.render(<Movies />, document.getElementById("root")); Old way to do it

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
