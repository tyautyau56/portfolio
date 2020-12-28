import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

// components
import App from "./components/App";
import Header from "./components/header";

// global style
import "./global.scss";

ReactDOM.render(
    <StrictMode>
        <Header />
        <App />
    </StrictMode>,
    document.getElementById("root")
);