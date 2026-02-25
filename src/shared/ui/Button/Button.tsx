import classNames from 'classnames'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

const enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, onClick, ...otherProps } = props

    return (
        <button
            className={classNames(cls.button, {}, [className, cls.clear])}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </button>
    )
}
