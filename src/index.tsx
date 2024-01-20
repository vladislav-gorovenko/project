import {createRoot} from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import {StrictMode} from "react";
import App from "./app/App";
import {ThemeProvider} from "./app/providers/ThemeProvider";

const container = document.getElementById("root");

if (!container) {
	throw new Error("Root element not found")
}

const root = createRoot(container);
root.render(
	<StrictMode>
		<ThemeProvider>
			<Router>
				<App/>
			</Router>
		</ThemeProvider>
	</StrictMode>
);
