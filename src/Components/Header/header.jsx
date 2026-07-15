import React from 'react';
import './header.css';
import profile from '../../assets/Profile.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
  return (
    <div id='home' className='header'>
      <div className="hero-container reveal-on-scroll reveal-zoom">
        <span className="hero-orbit hero-orbit-one" aria-hidden="true"></span>
        <span className="hero-orbit hero-orbit-two" aria-hidden="true"></span>
        <img src={profile} alt="Profile" className="profile-img" />
      </div>
      <h1 className="reveal-on-scroll reveal-up" style={{ "--reveal-delay": "0.12s" }}>
        <span className="intro-name">I'm Keerthi, </span>
        <span className="title-role">Software <span className="typing-text">Developer in Sri Lanka</span></span>
      </h1>
      <p className="reveal-on-scroll reveal-up" style={{ "--reveal-delay": "0.22s" }}>I'm a Final-year BSc (Hons) Information Technology undergraduate with a strong passion for full-stack development. I'm skilled in JavaScript, React.js, Node.js, and Kotlin-based Android development.</p>
      <div className="header-action reveal-on-scroll reveal-up" style={{ "--reveal-delay": "0.32s" }}>
        <AnchorLink className="header-connect" offset={50} href="#contact">Connect with me</AnchorLink>
        <a className="header-resume" href="/cv.pdf" target="_blank" rel="noopener noreferrer">My Resume</a>
      </div>
    </div>
  );
};

export default Header;
