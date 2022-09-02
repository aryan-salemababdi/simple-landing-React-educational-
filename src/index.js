import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import "./index.css"

//const header = <h1>hello world</h1>;
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
document.getElementById("root"));
