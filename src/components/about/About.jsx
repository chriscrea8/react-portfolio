import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
// import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
// import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              {/* <FaAward className='about__icon'/> */}
              <h5> Azure Support Engineer</h5>
              <small>Tek Experts</small>
            </article>

            <article className="about__card">
              {/* <FaAward className='about__icon'/> */}
              <h5> Frontend Developer</h5>
              <small>Skillup Africa</small>
            </article>

            <article className="about__card">
              {/* <FaAward className='about__icon'/> */}
              <h5> Mobile Web Specialist</h5>
              <small>Andela</small>
            </article>

          </div>

          <p>
            I am a Software Developer and Azure Technical Support Specialist, my skills are built around solving problems through building pixel-perfect web applications using the MERN dev stack. I build Web Applications and perform primary DevOps operations using MS Azure.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About