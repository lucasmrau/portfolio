import React from 'react'
import './about.css'
import ME from '../../assets/me2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Computer Programming</h5>
              <small>Georgian College</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Professional Scrum Master I</h5>
              <small>Scrum.org - </small>
              <small>certificate n. 804475</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Master in Law and Economics</h5>
              <small>Pontificia Universidade Católica - Brazil</small>
            </article>
          </div>

          <p>
          Computer Programming student at Georgian College (Barrie/ON) with background knowledge in several languages :Javascript(React and React Native), Java, C#, PHP. My main interests are in MERN stacks and mobile development. I'm looking for a 4-month coop beginning in September.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About