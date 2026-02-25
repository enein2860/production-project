import classNames from 'classnames'
import cls from './Loader.module.scss'

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <div className={classNames(cls.loader, {}, [])}></div>
        </div>
    )
}
