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
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lacinia purus, sed condimentum lacus. Ut a ex ut tortor facilisis lacinia ac id tellus. Etiam faucibus tortor ligula, condimentum mattis risus ultricies quis.Suspendisse potenti. Curabitur at semper arcu. Cras id turpis ipsum.</h2>
                <div className='button-container'>
                    <button onClick={() => scrollToSection('contact-section-container')} className='grid-button contact-button'> Contact Me </button>
                </div>
                <button onClick={() => scrollToSection('grid2-container')} className='small-button'>See my projects</button>
            </div>
        </div>
    );
}

export default AboutSection;