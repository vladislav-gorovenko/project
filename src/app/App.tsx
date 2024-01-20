import {HomePage} from "pages/HomePage";
import {Link, Route, Routes} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {NotFoundPage} from "pages/NotFoundPage";
import {Suspense} from "react";
import {useTheme} from "./providers/ThemeProvider";
import './styles/index.scss'
import {classNames} from 'shared/lib/classNames'

const App = () => {
	const [theme, toggleTheme] = useTheme()
	return (
		<div className={classNames('app', {}, [theme])}>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/posts'>Posts</Link>
				<button onClick={toggleTheme}>{theme}</button>
			</nav>
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
