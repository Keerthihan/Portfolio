import React from 'react'
import './about.css'
import Pro from "../../assets/Profile.png";

const about = () => {
    return (
        <div id='about'className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src="Theme_pattern" alt="" />
            </div>
            <div className="about-selection">
                <div className="about-left">
                    <img src={Pro} alt="" />
                </div>
                <div className="about-right">
                    <div className="aboutpara">
                        <p>I’m a second-year BSc (Hons) Information Technology undergraduate with a strong passion for full-stack development. I’m skilled in JavaScript, React.js, Node.js, and Kotlin-based Android development.</p>
                        <p>A proactive learner with hands-on experience working on real-world client projects, I’m currently seeking internship opportunities where I can contribute effectively and grow within a dynamic and fast-paced tech environment.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>UI/UX Design</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>App Development</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Web Development</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Machine Learning</p><hr style={{ width: "50%" }} /></div>

                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>Experience</p>

                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>4+</h1>
                    <p>Projects</p>

                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>4+</h1>
                    <p>Multiple Team Projects
</p>

                </div>
            </div>
        </div>
    )
}

export default about