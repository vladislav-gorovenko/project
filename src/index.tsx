import {createRoot} from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import {StrictMode} from "react";
import "./style.scss"

import App from "./App";

const container = document.getElementById("root");

if (!container) {
	throw new Error("Root element not found")
}

const root = createRoot(container);
root.render(<StrictMode><Router><App/></Router></StrictMode>);
