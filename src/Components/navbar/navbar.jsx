import React, { useRef, useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo2.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className="headerimg">
        <img src={logo} alt="Logo" className="logo-img" />
        <TiThMenu onClick={toggleMenu} className='nav-open'/>
      </div>

      <ul ref={menuRef} className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <IoMdCloseCircle onClick={toggleMenu} className='nav-close'/>

        <li>
          <AnchorLink className="anchor-link" href="#home" onClick={() => { setMenu("home"); toggleMenu(); }}>
            <p>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about" onClick={() => { setMenu("about"); toggleMenu(); }}>
            <p>About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services" onClick={() => { setMenu("services"); toggleMenu(); }}>
            <p>Services</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work" onClick={() => { setMenu("work"); toggleMenu(); }}>
            <p>Portfolio</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact" onClick={() => { setMenu("contact"); toggleMenu(); }}>
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
  );
};

export default Navbar;