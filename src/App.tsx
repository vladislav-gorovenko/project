import {HomePageAsync} from "./pages/HomePage/HomePage.async";
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {NotFoundPageAsync} from "./pages/NotFoundPage/NotFoundPage.async";
import {Suspense} from "react";
import {useTheme} from "./theme/useTheme";
import './styles/index.scss'

const App = () => {
	const [theme, toggleTheme] = useTheme()
	return (
		<div className={`app ${theme}`}>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/posts'>Posts</Link>
				<button onClick={toggleTheme}>{theme}</button>
			</nav>
			<Suspense fallback={<div>Загрузка...</div>}>
				<Routes>
					<Route path="/" element={<HomePageAsync/>}/>
					<Route path="/about" element={<AboutPageAsync/>}/>
					<Route path="*" element={<NotFoundPageAsync/>} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
