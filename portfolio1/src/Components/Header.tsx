import '../Styles/Header.css';
import github from '../Images/github.png'
import linkedin from '../Images/linkedin.png'
import twitter from '../Images/twitter.png'
function Header() {
  return (
      <div className='header-container'>
          <div className='header-photo'>
              <img src='#' alt='photo' />
          </div>
          <div className='header-name'>
              <h1>Jakub Grych</h1>
              <h2>UX/UI Designer, Full-stack developer</h2>
          </div>
          <div className='header-socials-links'>
              <a className='social-link' href='#'><div><img src={github} alt="GitHub"/></div></a>
              <a className='social-link' href='#'><div><img src={linkedin} alt="LinkedIn"/></div></a>
              <a className='social-link' href='#'><div><img src={twitter} alt="Twitter"/></div></a>
          </div>
      </div>
  );
}

export default Header;