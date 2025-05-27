import React from 'react'
import './contact.css';
import { IoMail } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "b4b1ad45-1fdc-4d66-a084-b7cffe290a52");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in Touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <IoMail className="contact-icon" /><p>keerthihan05@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <FaPhoneVolume className="contact-icon" /><p>+94755420035</p>
                        </div>
                        <div className="contact-detail">
                            <MdLocationPin className="contact-icon" /><p>Colombo, Sri Lanka</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" />

                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" />

                    <label htmlFor="message">Write your message here</label>
                    <textarea id="message" name="message" rows="8" placeholder="Enter your message"></textarea>

                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;