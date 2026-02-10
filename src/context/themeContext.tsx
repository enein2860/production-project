export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

import {createContext, useState} from "react";

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const LOCAL_STORAGE_KEY = 'theme';

export const ThemeContext = createContext<ThemeContextProps>({})
