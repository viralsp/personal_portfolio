import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
// import {useRef} from 'react'
// import emailjs from 'emailjs-com'

const contact = () => {
    // const form = useRef();
    // const sendEmail = (e) =>{
    //     e.preventDefault();
    //     emailjs.sendForm('YoUR_SERVICE_ID','YOUR_TEMPLATE_ID',form.current,'YOUR_USER_ID')
    // };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact_container'>
                <div className='contact_options'>
                    <article className='contact_option'>
                        <MdOutlineEmail className='contact_option-icon'/>
                       <h4>Email</h4>
                       <h5>viralspatel1112@gmail.com</h5>
                       <a href='mailto:viralspatel1112@gmail.com' target="_blank">Send Email</a>
                    </article>
                    <article className='contact_option'>
                        <BsLinkedin className='contact_option-icon'/>
                       <h4>Linkedin</h4>
                       <h5>Messager</h5>
                       <a href='https://www.linkedin.com/in/viral-patel-242107212' target="_blank">connect</a>
                    </article>
                </div>
                <form action=''>
                    <input type="text" name='name' placeholder='your full Name' required/>
                    <input type="text" name='email' placeholder='your Email' required/>
                    <textarea name='message' rows='7' placeholder='your Message' required/>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default contact