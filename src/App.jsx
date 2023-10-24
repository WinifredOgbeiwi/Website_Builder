import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Home from './routes/HomePage'
import About from './routes/About'
import Features from './routes/Features'
import Pricing from './routes/Pricing'
import Faq from './routes/Faq'
import Blog from './routes/Blog'
import Footer from './layout/Footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/feature' element={<Features />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App
