import React from 'react';
import './mywork.css';
import myworkdata from '../../assets/myworddata.js';
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="myworktitle work-heading-motion reveal-on-scroll reveal-zoom">
        <span className="section-kicker">Selected projects</span>
        <h1 aria-label="My latest work">
          <span style={{ "--title-delay": "0s" }}>My</span>
          <span style={{ "--title-delay": "0.13s" }}>latest</span>
          <span style={{ "--title-delay": "0.26s" }}>work</span>
        </h1>
        <p>Recent live websites built with responsive layouts, polished visuals, and clear business goals.</p>
      </div>
      <div className="mywork-container">
        {myworkdata.map((work, index) => {
          return (
            <article className="work-card work-card-motion reveal-on-scroll reveal-zoom" key={index} style={{ "--reveal-delay": `${index * 0.12}s` }}>
              <a href={work.link} target="_blank" rel="noopener noreferrer" className="work-image-link" aria-label={`Open ${work.W_name} live website`}>
                <img src={work.w_img} alt={`${work.W_name} project preview`} loading="lazy" decoding="async" />
                <span className="work-live-badge"><FaExternalLinkAlt /> Live site</span>
              </a>
              <div className="work-card-content">
                <div>
                  <span className="work-category">{work.category}</span>
                  <h2>{work.W_name}</h2>
                  <p>{work.description}</p>
                </div>
                <div className="work-tech-list">
                  {work.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <a className="work-link" href={work.link} target="_blank" rel="noopener noreferrer">
                  View project <FaArrowRight />
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <AnchorLink className="myworkshowmore reveal-on-scroll reveal-zoom" offset={50} href="#contact">
        <p>Start a project</p>
        <FaArrowRight />
      </AnchorLink>
    </div>
  );
}

export default MyWork;
