import { Routes, Route } from 'react-router-dom'
import Counter from './components/counter'
import './dasd.scss'
import AboutPage from './pages/AboutPage/about'
import MainPage from './pages/MainPage/main'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default App;
