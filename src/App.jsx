import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nabar'
import About from './components/about/About'
import Experience from './components/Experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
export default App
