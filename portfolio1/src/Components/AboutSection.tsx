import '../Styles/AboutSection.css';
import { useState, useEffect } from 'react';
    function AboutSection() {
        const [] = useState<number>(0);
        const handleScroll = () => {
            //setScrollPosition(window.scrollY);
        };

        const scrollToSection = (sectionName: string) => {
            const sectionElement = document.querySelector(`.${sectionName}`);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth' });
            }
        };

        useEffect(() => {
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

        return (
        <div className='grid-container'>
            <div className='grid-item left-item'>
                <div className='about-section'>
                    <h1>About Me</h1>
                </div>
                <hr/>
                <h2>I am an ambitious student who is willing to try new things. I am currently working on creating a few template websites for my portfolio as well as mastering my skills in object oriented programming using C#. My stack consists of: React, MongoDB, Figma, C# and others. <br/><br/> DISCLAIMER: This site is still in development, many features are yet to be introduced </h2>
                <div className='button-container'>
                    <button onClick={() => scrollToSection('contact-section-container')} className='grid-button contact-button'> Contact Me </button>
                </div>
                <button onClick={() => scrollToSection('grid2-container')} className='small-button'>See my projects</button>
            </div>
        </div>
    );
}

export default AboutSection;