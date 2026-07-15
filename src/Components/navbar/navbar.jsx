import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo2.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const selectMenu = (item) => {
    setMenu(item);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", href: "#home", offset: 0 },
    { id: "about", label: "About", href: "#about", offset: 50 },
    { id: "services", label: "Services", href: "#services", offset: 50 },
    { id: "work", label: "Work", href: "#work", offset: 50 },
    { id: "contact", label: "Contact", href: "#contact", offset: 50 },
  ];

  return (
    <>
      <div className='navbar'>
        <AnchorLink className="brand-card" href="#home" onClick={() => selectMenu("home")}>
          <img src={logo} alt="Keerthi logo" className="logo-img" />
          <span className="brand-copy">
            <strong>Keerthi</strong>
            <small>Developer</small>
          </span>
        </AnchorLink>

        <button className="mobile-menu-button" type="button" onClick={toggleMenu} aria-label="Open navigation menu" aria-expanded={isMenuOpen}>
          <span>Menu</span>
          <TiThMenu className='nav-open'/>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <IoMdCloseCircle onClick={toggleMenu} className='nav-close'/>
          {navItems.map((item) => (
            <li key={item.id}>
              <AnchorLink
                className={`anchor-link nav-link ${menu === item.id ? "active" : ""}`}
                offset={item.offset}
                href={item.href}
                onClick={() => selectMenu(item.id)}
              >
                <span>{item.label}</span>
              </AnchorLink>
            </li>
          ))}
        </ul>

        <div className="nav-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact" onClick={() => selectMenu("contact")}>
            Let&apos;s talk
          </AnchorLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
