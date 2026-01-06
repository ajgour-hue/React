import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import Navbar from "./components/Navbar";
import Random from "./pages/Random";



const App = () => {
  return (
    <div>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/men' element={<Men />} />
        <Route path='/product/women' element={<Women />} />
        <Route path='/:id' element={<Random />} />

      </Routes>
    </div>
  )
}

export default App
