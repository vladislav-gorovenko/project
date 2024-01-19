import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import "./style.scss"

import {App} from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<StrictMode><App/></StrictMode>);
