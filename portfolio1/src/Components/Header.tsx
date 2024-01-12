import '../Styles/Header.css';

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
              <a className='social-link' href='#'><div><img src='../Images/github.png' alt="GitHub"/></div></a>
              <a className='social-link' href='#'><div><img src='../Images/linkedin.png' alt="LinkedIn"/></div></a>
              <a className='social-link' href='#'><div><img src='../Images/twitter.png' alt="Twitter"/></div></a>
          </div>
      </div>
  );
}

export default Header;