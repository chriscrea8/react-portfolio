import React from 'react'
import './Footer.css'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>ChrisCrea8</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/christian-chukwu" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/chriscrea8" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/chriscrea8" target="_blank"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Chriscrea8. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer