import classNames from 'classnames'
import { useTheme } from 'app/theme'
import { AppRouter } from 'app/router'
import { Navbar } from 'widgets/Navbar'
import './styles/index.scss'
import { Sidebar } from 'widgets/Sidebar'

function App() {
    const { theme } = useTheme()

    return (
        <div className={classNames('App', {}, [theme])}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <div className="page-wrapper">
                    <AppRouter />
                </div>
            </div>
        </div>
    )
}

export default App
