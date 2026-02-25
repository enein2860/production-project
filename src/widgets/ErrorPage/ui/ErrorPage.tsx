import classNames from 'classnames'
import cls from './ErrorPage.module.scss'

interface ErrorPageProps {
    className?: string
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            Something went wrong
        </div>
    )
}
