import React from 'react'
import './about.css'
import Me from '../../assets/mee.jpeg'
import {FaAward} from 'react-icons/fa' 
import {FiUsers} from 'react-icons/fi' 
import {VscFolderLibrary} from 'react-icons/vsc' 

const about = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about_container'>
                <div className='about_me'>
                    <div className='about_me-image'>
                        <img src={Me} alt='about img' />
                    </div>
                </div>
                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='about_card'>
                            <FaAward  className='about_icon'/>
                            <h5>Experience</h5>
                            <small>Fresher</small>
                        </article>
                        <article className='about_card'>
                            <FiUsers  className='about_icon'/>
                            <h5>Education</h5>
                            <small>B.E in Information Technology</small>
                        </article>
                        <article className='about_card'>
                            <VscFolderLibrary  className='about_icon'/>
                            <h5>Projects</h5>
                            <small>10 Projects</small>
                        </article>
                    </div>
                    <p>
                        I have Completed my schooling from S.T George High school , and my higher Education from B.S.G.D jr College of Science,Arts and Commerce and currently in an UG in Ragiv Gandhi Institute Of Technology.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default about