import '../Styles/ContactSection.css';
import github from '../Images/github.png';
import linkedin from '../Images/linkedin.png';
import twitter from '../Images/twitter.png';
function ContactSection() {
    return (
        <div className='contact-section-container'>
            <div className={'contact-me'}>
                <h1>Contact Me</h1>
                <hr/>
                <div className={'form-container'}>
                    <div className={'mail-form'}></div>
                    <div className={'or'}></div>
                    <div className={'phone-number'}></div>
                </div>
            </div>
            <div className={'social-links'}>
                <ul className={'social-links-list'}>
                    <li><a className={'social-link'} href={'/'}><img src={github} alt={'github'}/></a></li>
                    <li><a className={'social-link'} href={'/'}><img src={twitter} alt={'twitter'}/></a></li>
                    <li><a className={'social-link'} href={'/'}><img src={linkedin} alt={'linkedin'}/></a></li>
                </ul>
                <h4>© Jakub Grych 2023-2024</h4>
            </div>

        </div>
    );
}

export default ContactSection;