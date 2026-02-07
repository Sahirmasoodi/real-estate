import React, { useState } from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Testimonials from './pages/Testimonials'
import Header from './components/Header'
import Footer from './components/Footer'
import Brokers from './pages/Brokers'

const App = () => {
  const [dark,setDark]=useState(false)
  return (
    <div className={dark ? 'bg-black':'bg-blue-50'}>
      <Header setDark={setDark} dark={dark} />
      <About dark={dark}/>
      <Brokers dark={dark}/>
      <Projects dark={dark}/>
      <Testimonials dark={dark}/>
      <Contact dark={dark}/>
      <Footer dark={dark}/>
    </div>
  )
}

export default App
