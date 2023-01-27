import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Adobe XD</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>3+ years UIUX design experience</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Certified Google UX designer</p>
            </li>
            
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>4+ years development experience</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Git Version Control</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Search Engine Optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>SCRUM/AGILE</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Graphic Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Adobe Photoshop</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Adobe Illustrator</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Animation - Adobe After Effects</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>7+ years graphic design experience</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services