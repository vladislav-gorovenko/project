import {createContext} from "react";

export enum Theme {
	LIGHT = 'light',
	DARK ='dark'
}

interface ThemeContextProps {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

export const LOCAL_STORAGE_THEME_KEY = 'theme'

const defaultValue = {
	theme: Theme.LIGHT,
	setTheme: () => {},
}

export const ThemeContext = createContext<ThemeContextProps>(defaultValue)
