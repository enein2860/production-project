import classNames from 'classnames'
import cls from './ThemeSwitcher.module.scss'
import { useTheme, Theme } from 'app/theme'
import ThemeDark from 'shared/assets/icons/theme-dark.svg'
import ThemeLight from 'shared/assets/icons/theme-light.svg'
import { Button } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <ThemeDark /> : <ThemeLight />}
        </Button>
    )
}
