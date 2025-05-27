import React from 'react'
import './header.css';
import profile from '../../assets/Profile.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
  return (
        <div id='home' className='header'>
            <div className="hero-container">
                <img src={profile} alt="Profile" className="profile-img" />
            </div>
            <h1><span>I'm Keerthi, </span> Software Developer in Sri Lanka</h1>
            <p>I'm a second-year BSc (Hons) Information Technology undergraduate with a strong passion for full-stack development. I'm skilled in JavaScript, React.js, Node.js, and Kotlin-based Android development.</p>
            <div className="header-action">
                <div className="header-connect">
                    <AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink>
                </div>
                <div className="header-resume">
                    <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">My Resume</a>
                </div>
            </div>
        </div>
    )
}


export default Header