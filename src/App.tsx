import {HomePage} from "./pages/HomePage/HomePage.async";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {AboutPage} from "./pages/AboutPage/AboutPage.async";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage.async";
import {Header} from "./pages/components/Header";
import {Suspense} from "react";

const App = () => {
	return (
		<div>
			<Header/>
			<Suspense fallback={<div>Загрузка...</div>}>
				<Routes>
					<Route path="/" element={<HomePage/>}/>
					<Route path="/about" element={<AboutPage/>}/>
					<Route path="*" element={<NotFoundPage/>} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
