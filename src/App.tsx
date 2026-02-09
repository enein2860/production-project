import { Routes, Route, } from 'react-router-dom'
import './styles/index.scss'
import { Suspense, lazy } from "react";
const MainPage = lazy(() => import('./pages/MainPage/main'))
const AboutPage = lazy(() => import('./pages/AboutPage/about'))


function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;
