import '../Styles/ContactSection.css';
import github from '../Images/github.png';
import twitter from '../Images/twitter.png';
import linkedin from '../Images/linkedin.png';
import MailForm from "./MailForm.tsx";
function ContactSection() {
    return (
        <div className={'cococontainer'}>
        <div className='contact-section-container'>
            <div className={'contact-me'}>
                <h1>Contact Me</h1>
                <hr/>
                <div className={'form-container'}>
                    <div className={'mail-form'}>
                        <MailForm/>
                    </div>
                    <div className={'or'}><h3>or</h3></div>
                    <div className={'phone-number'}>
                        <h1>Call Me:</h1>
                        <h3>+48 574 496 XXX</h3>
                    </div>
                </div>
            </div>
        </div>
            <div className={'social-links'}>
                <ul className={'social-links-list'}>
                    <li><a className={'social-link'} href={'https://github.com/ayanover'} target="_blank" rel="noopener noreferrer"><img src={github} alt={'github'}/></a></li>
                    <li><a className={'social-link'} href={'https://www.linkedin.com/in/jakub-grych-039540197/'} target="_blank" rel="noopener noreferrer"><img src={twitter} alt={'twitter'}/></a></li>
                    <li><a className={'social-link'} href={'https://www.linkedin.com/in/jakub-grych-039540197/'} target="_blank" rel="noopener noreferrer"><img src={linkedin} alt={'linkedin'}/></a></li>
                </ul>
                <h4>© Jakub Grych 2023-2024</h4>
            </div>
        </div>


    );
}

export default ContactSection;