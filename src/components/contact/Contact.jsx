import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RxTwitterLogo} from 'react-icons/rx'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_or93gxu', 'template_0yt23lq', form.current, 'OpsqKWJJh_h7UaeQl')

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <a href="mailto:christianchukwu84@gmail.com" target="_blank">Send Message</a>
          </article>
          <article className="contact__option">
            <RxTwitterLogo className='contact__option-icon'/>
            <h4>Twitter</h4>
            <a href="https://twitter.com/chriscrea8" target="_blank">Send Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <a href="https://wa.link/3ha00h" target="_blank">Send Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email'  required/>
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact