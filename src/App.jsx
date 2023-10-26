import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Home from './routes/Home'
import About from './routes/About'
import Features from './routes/Features'
import Pricing from './routes/Pricing'
import Blog from './routes/Blog'
import Footer from './layout/Footer'
import Work from './routes/Work'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/features' element={<Features />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/work' element={<Work />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App
