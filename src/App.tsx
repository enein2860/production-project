import { Routes, Route, } from 'react-router-dom'
import './styles/index.scss'
import {Suspense, lazy, useState} from "react";
import {useTheme} from "./hooks/useTheme";

const MainPage = lazy(() => import('./pages/MainPage/main'))
const AboutPage = lazy(() => import('./pages/AboutPage/about'))


function App() {
    const {theme, toggleTheme} = useTheme();


  return (
    <div className={`App ${theme}`}>
        <div className="button" onClick={toggleTheme}>Toggle Theme</div>
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
