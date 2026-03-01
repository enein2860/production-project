import React, { FC, useMemo, useState, PropsWithChildren } from 'react'
import { LOCAL_STORAGE_KEY, Theme, ThemeContext } from '../lib/themeContext'

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_KEY) as Theme) || Theme.LIGHT

interface ThemeProviderProps {
    initialTheme?: Theme
}

const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
    children,
    initialTheme,
}) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

    const defaultProps = useMemo(
        () => ({
            theme: theme,
            setTheme: setTheme,
        }),
        [theme]
    )

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider }
