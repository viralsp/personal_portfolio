import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className='container experience_container'>
                <div className='experience_frontend'>
                    <h3>Frontend Developement</h3>
                    <div className='experience_content'>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                                <h4>JAVASCRIPT</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                                <h4>REACT JS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                                <h4>PYTHON</h4>
                                <small className='text-light'>Begineer</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='experience_backend'>
                    <h3>Backend Developement</h3>
                    <div className='experience_content'>
                            <article className='experience_details'>
                                <BsPatchCheckFill className='experience_details-icon'/>
                                <div>
                                    <h4>NODE JS</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                                </article>
                            <article className='experience_details'>
                                <BsPatchCheckFill className='experience_details-icon'/>
                                <div>
                                    <h4>MONGO DB</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                            <article className='experience_details'>
                                <BsPatchCheckFill className='experience_details-icon'/>
                                <div>
                                    <h4>MY SQL</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                            <article className='experience_details'>
                                <BsPatchCheckFill className='experience_details-icon'/>
                                <div>
                                    <h4>C++</h4>
                                    <small className='text-light'>Begineer</small>
                                </div>
                            </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default experience