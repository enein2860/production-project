import classNames from 'classnames'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

export const enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, onClick, ...otherProps } = props

    return (
        <button
            className={classNames(cls.button, {}, [className, cls[theme]])}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </button>
    )
}
