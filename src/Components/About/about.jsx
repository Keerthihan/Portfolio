import React, { useEffect, useRef, useState } from 'react'
import './about.css'
import Pro from "../../assets/Profile.png";

const CountUp = ({ end, suffix = '+' }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);

    useEffect(() => {
        const node = countRef.current;
        if (!node) return;

        let animationFrame;

        const startCounter = () => {
            const duration = 1400;
            const startTime = performance.now();

            const animate = (currentTime) => {
                const progress = Math.min((currentTime - startTime) / duration, 1);
                const easedProgress = 1 - Math.pow(1 - progress, 3);

                setCount(Math.round(easedProgress * end));

                if (progress < 1) {
                    animationFrame = requestAnimationFrame(animate);
                }
            };

            setCount(0);
            animationFrame = requestAnimationFrame(animate);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startCounter();
                    observer.unobserve(node);
                }
            },
            { threshold: 0.45 }
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
            cancelAnimationFrame(animationFrame);
        };
    }, [end]);

    return (
        <span ref={countRef} className="count-up">
            {count}{suffix}
        </span>
    );
};

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title reveal-on-scroll reveal-up">
                <h1>About Me</h1>
                <img src="Theme_pattern" alt="" />
            </div>
            <div className="about-selection">
                <div className="about-left reveal-on-scroll reveal-left">
                    <img src={Pro} alt="Keerthi profile" loading="lazy" decoding="async" />
                </div>
                <div className="about-right reveal-on-scroll reveal-right" style={{ "--reveal-delay": "0.12s" }}>
                    <div className="aboutpara">
                        <p>I’m a Final-year BSc (Hons) Information Technology undergraduate with a strong passion for full-stack development. I’m skilled in JavaScript, React.js, Node.js, and Kotlin-based Android development.</p>
                        <p>A proactive learner with hands-on experience working on real-world client projects, I’m currently seeking internship opportunities where I can contribute effectively and grow within a dynamic and fast-paced tech environment.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill" style={{ "--skill-level": "50%" }}><p>UI/UX Design</p><hr /></div>
                        <div className="about-skill" style={{ "--skill-level": "60%" }}><p>App Development</p><hr /></div>
                        <div className="about-skill" style={{ "--skill-level": "70%" }}><p>Web Development</p><hr /></div>
                        <div className="about-skill" style={{ "--skill-level": "50%" }}><p>Machine Learning</p><hr /></div>

                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement reveal-on-scroll reveal-zoom">
                    <h1><CountUp end={2} /></h1>
                    <p>Experience</p>

                </div>
                <hr/>
                <div className="about-achievement reveal-on-scroll reveal-zoom" style={{ "--reveal-delay": "0.1s" }}>
                    <h1><CountUp end={10} /></h1>
                    <p>Projects</p>

                </div>
                <hr/>
                <div className="about-achievement reveal-on-scroll reveal-zoom" style={{ "--reveal-delay": "0.2s" }}>
                    <h1><CountUp end={10} /></h1>
                    <p>Team Projects</p>

                </div>
            </div>
        </div>
    )
}

export default About
