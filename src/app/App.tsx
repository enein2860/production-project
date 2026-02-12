import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/provider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import './styles/index.scss';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('App', {}, [theme])}>
            <Navbar />
            <div className="content-page">
                <AppRouter />
            </div>
        </div>
    );
}

export default App;