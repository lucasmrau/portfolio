import React from 'react'
import './footer.css'
import {FiInstagram, FiLinkedin} from 'react-icons/fi'
import { BsGithub } from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Lucas Rau</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Skills & Certificates</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/lucasmoraesrau/" target="_blank" rel="noreferrer"><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/lucas-moraes-rau/" target="_blank" rel="noreferrer"><FiLinkedin/></a>
        <a href="https://github.com/lucasmrau/" target="_blank" rel="noreferrer"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
      </div>
    </footer>
  )
}

export default Footer