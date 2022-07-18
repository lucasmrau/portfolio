import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Skills & Certificates</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Development Skills</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>HTML</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>CSS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Bootstrap</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>React & React Native</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Typescript</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>NodeJS</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Soft Skills</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Work in a group, Empathy, Time Management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Critical Thinking, Problem-solving Skills, Negotiation Skills</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Attention to detail, Process Oriented, Work Independently</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Listening Skills, Communication Skills</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Certificates and Volunteer Work</h3>
          </div>

          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon' />
              <p>Professional Scrum Master I – Scrum.org (certificate n. 804475)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Health & Safety Awareness Certificate (Ministry of Labour)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Communication and Oratory (Conquer School)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Negotiation Skills and Persuasion (Conquer School)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Volunteer IT in Toronto Spiritist Society</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Volunteer Mindfulness Instructor</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Volunteer in Casa do Caminho Charity Center</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Volunteer in Movimento Nacional das Crianças Inadotáveis (MONACI)</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services