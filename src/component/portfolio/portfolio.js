import React from 'react'
import './portfolio.css'
import IMG2 from '../../assets/intern.png'
import IMG3 from '../../assets/amazon.png'
import IMG4 from '../../assets/quiz.png'
import IMG8 from '../../assets/recipie.png'
import IMG6 from '../../assets/timer.png'
import IMG7 from '../../assets/todo.png'
import IMG5 from '../../assets/web.png'

const portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className='container portfolio_container'>
                <article className='portfolio_item'>
                    <div className='poortfolio_item-image'>
                        <img src={IMG5} alt=''></img>
                    </div>
                    <h3>This is Portfolio item Recipie</h3>
                    <a href='https://github.com/viralsp' className='btn'>Github</a>
                </article>
                <article className='portfolio_item'>
                    <div className='poortfolio_item-image'>
                        <img src={IMG3} alt=''></img>
                    </div>
                    <h3>This is Portfolio item Amazon Clone</h3>
                    <a href='https://github.com/viralsp' className='btn'>Github</a>
                </article>
                <article className='portfolio_item'>
                    <div className='poortfolio_item-image'>
                        <img src={IMG4} alt=''></img>
                    </div>
                    <h3>This is Portfolio item Quiz</h3>
                    <a href='https://github.com/viralsp' className='btn'>Github</a>
                </article>
                <article className='portfolio_item'>
                    <div className='poortfolio_item-image'>
                        <img src={IMG2} alt=''></img>
                    </div>
                    <h3>This is Portfolio item Home page(internship task)</h3>
                    <a href='https://github.com/viralsp' className='btn'>Github</a>
                </article>
                <article className='portfolio_item'>
                    <div className='poortfolio_item-image'>
                        <img src={IMG6} alt=''></img>
                    </div>
                    <h3>This is Portfolio item timer</h3>
                    <a href='https://github.com/viralsp' className='btn'>Github</a>
                </article>
                <article className='portfolio_item'>
                    <div className='poortfolio_item-image'>
                        <img src={IMG7} alt=''></img>
                    </div>
                    <h3>This is Portfolio item todo</h3>
                    <a href='https://github.com/viralsp' className='btn'>Github</a>
                </article>
                <article className='portfolio_item'>
                    <div className='poortfolio_item-image'>
                        <img src={IMG8} alt=''></img>
                    </div>
                    <h3>This is Portfolio item web page</h3>
                    <a href='https://github.com/viralsp' className='btn'>Github</a>
                </article>
            </div>
        </section>
    )
}

export default portfolio