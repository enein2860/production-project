import cls from "./NotFoundPage.module.scss";
import classNames from "classnames";

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {
    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            <h1>Page not found</h1>
        </div>
    );
};