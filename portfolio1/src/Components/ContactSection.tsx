import '../Styles/ContactSection.css';
import github from '../Images/github.png';
import MailForm from "./MailForm.tsx";
function ContactSection() {
    return (
        <div className='contact-section-container'>
            <div className={'contact-me'}>
                <h1>Contact Me</h1>
                <hr/>
                <div className={'form-container'}>
                    <div className={'mail-form'}>
                        <MailForm/>
                    </div>
                    <div className={'or'}></div>
                    <div className={'phone-number'}></div>
                </div>
            </div>
            <div className={'social-links'}>
                <h1>You can find me here: </h1>
                <ul className={'social-links-list'}>
                    <li><img src={github} alt={'github'}/></li>
                    <li><img src={github} alt={'github'}/></li>
                    <li><img src={github} alt={'github'}/></li>
                </ul>
            </div>
        </div>
    );
}

export default ContactSection;