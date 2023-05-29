import './aboutContentStyle.css';

import React from 'react'
import { Link } from 'react-router-dom'
import images12 from "../assets/images12.jpg"
import images13 from "../assets/images13.png"

const AboutContent = () => {
  return (
    <div className='about'>
        <div className="left">
        <h1>Who Am I?</h1>
        <p>
            Im a react font-end developer. I create responsive secure websites for my clients.
        </p>
        <Link to="/contact">
            <button className='btn'>Contact</button>
        </Link>
        </div>
        
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={images12} alt="images" className='img' />
                </div>
                <div className="img-stack bottom">
                    <img src={images13} alt="images" className='img' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent