import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBAr from './compont/NavBAr'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Portfolio from './pages/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="div">
      <BrowserRouter>
        <div>
          <NavBAr />
        </div>
        <div className="h-[100px]"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
