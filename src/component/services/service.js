import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

const service = () => {
    return (
        <section id='service'>
            <h2>What I Offer</h2>

            <div className='container services_container'>
            <article className='service'>
                    <div className='service_head'>
                        <h3>Web Developement</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>can work with Html</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>can work with CSS</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>can work with JavaScript</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>can work with Bootstrap</p>
                        </li>
                    </ul>
                </article>
                <article className='service'>
                    <div className='service_head'>
                        <h3>Full Stack Developement</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>can work with Mongodb</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>can work with Express</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>can work with Sql</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>can work with Reactjs</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>can work with Nodejs</p>
                        </li>
                    </ul>
                </article>
                <article className='service'>
                    <div className='service_head'>
                        <h3>Other Languages Known</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>can work with Basic Java</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>can work with Python</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>can work with Basic c++</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>can work with c</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default service