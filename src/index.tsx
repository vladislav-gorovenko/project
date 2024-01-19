import {createRoot} from "react-dom/client";
import "./style.scss"
import {StrictMode} from "react";
import {Counter} from "./components/Counter";

const App = () => {
	return <StrictMode>
		<div>
			<Counter/>
		</div>
	</StrictMode>
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
