import './FooterStyle.css';

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style ={{color: "#fff",
                marginRight: "2rem"}}/>
                <div>
                    <p>123 Housing Society</p>
                    <p>kahror pacca</p>
                </div>
                </div>
                <div className="phone">
                <h4>
                    <FaPhone size={20} style ={{color: "#fff",
                marginRight: "2rem"}}/>
                0302, 666,8601
               </h4>
                </div>
                <div className="emial">
                <h4>
                    <FaMailBulk size={20} style ={{color: "#fff",
                marginRight: "2rem"}}/>
                ghulammustafa0302666@Gmail.com
               </h4>
                </div>
            </div>

            <div className="right">
                <h4>About the company</h4>
                <p>this is me Fahimul CEO & Founder of Tach2etc. I enjoy discussing new projects and design challenges</p>
                <div className="social">
                <FaFacebook size={30} style ={{color: "#fff",
                marginRight: "1rem"}}/>
                <FaTwitter size={30} style ={{color: "#fff",
                marginRight: "1rem"}}/>

                <FaLinkedin size={30} style ={{color: "#fff",
                marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer