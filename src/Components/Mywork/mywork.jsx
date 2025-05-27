import React from 'react';
import './mywork.css';
import myworkdata from '../../assets/myworddata.js';
import { FaArrowRight } from "react-icons/fa";

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="myworktitle">
        <h1>My latest work</h1>
      </div>
      <div className="mywork-container">
        {myworkdata.map((work, index) => {
          return <img key={index} src={work.w_img} alt={work.W_name} />;
        })}
      </div>
      <div className="myworkshowmore">
        <p>Show more</p>
        <FaArrowRight />
      </div>
    </div>
  );
}

export default MyWork;