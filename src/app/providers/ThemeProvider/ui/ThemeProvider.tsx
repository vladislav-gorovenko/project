import {FC, ReactNode, useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/ThemeContext";

interface ThemeProviderProps {
	children: ReactNode;
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider:FC<ThemeProviderProps> = ({children}) => {
	const [theme, setTheme] = useState(defaultTheme)

	const defaultValue = useMemo(() => {
		return {
			theme,
			setTheme
		}
	}, [theme])

	return <ThemeContext.Provider value={defaultValue}>
		{children}
	</ThemeContext.Provider>
}

export default ThemeProvider;
