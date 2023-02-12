import React from 'react'
import './footer.css'
import {GrFacebookOption} from 'react-icons/gr'
import {FiInstagram} from 'react-icons/fi'
import {FiYoutube} from 'react-icons/fi'
const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>NGUYEN</a>

      <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonial">Testimonial</a></li>
          <li><a href="#contact">Contact</a></li>
          
      </ul> 
      <div className="footer__social">
        <a href="https://facebook.com"><GrFacebookOption/></a>
        <a href="https://instargram.com"><FiInstagram/></a>
        <a href="https://youtube.com"><FiYoutube/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; NGUYEN All right reverved</small>
      </div>

    </footer>
  )
}

export default Footer



