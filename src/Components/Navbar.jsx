import React, { useRef } from 'react'
import { useState } from 'react';
import './Navbar.css'
import logo from '../assets/logo2.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState("home"); // Changed to setMenu for consistency
  const menuRef = useRef();
  
  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }
  
  return (
    <div className='navbar'>
      <div className="headerimg">
        <img src={logo} alt="Logo" className="logo-img" />
        <TiThMenu onClick={openMenu} className='nav-open'/>
      </div>

      <ul ref={menuRef} className="nav-menu">
        <IoMdCloseCircle onClick={closeMenu} className='nav-close'/>

        <li>
          <AnchorLink className="anchor-link" href="#home" onClick={() => setMenu("home")}>
            <p>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about" onClick={() => setMenu("about")}>
            <p>About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services" onClick={() => setMenu("services")}>
            <p>Services</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work" onClick={() => setMenu("work")}>
            <p>Portfolio</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact" onClick={() => setMenu("contact")}>
            <p>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact" onClick={() => setMenu("contact")}>
          Connect with me
        </AnchorLink>
      </div>
    </div>
  )
}

export default Navbar;