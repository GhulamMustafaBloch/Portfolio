
import React, { useState } from 'react';
import './NavBarStyle.css'
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa"

const NavBar = () => {
  const [Click, SetClick] = useState(false);
  const handleClick = () => SetClick(!Click);

  const [Color, SetColor] = useState(false)
  const changeColor = () =>{
    if (window.scrollY >= 100) {
      SetColor(true);
    }else
    {
      SetColor(false);
    }
  }

  window.addEventListener("scroll", changeColor);
  return (
    <div className={Color ? "header header-bg": "header"}>
      <Link to="/">
        <h1>GMBloch</h1>
      </Link>

      <ul className={Click ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
        <li>
            <Link to="/project">project</Link>
        </li>
        </li>
        <li>
        <li>
            <Link to="/about">About</Link>
        </li>
        </li>
        <li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {Click ? ( <FaTimes size={20} style={{color: "#fff"}} />) : (<FaBars size={20} style={{color: "#fff"}} />)}
       
        
      </div>
    </div>
  );
}

export default NavBar;
