import '../Styles/Header.css';
import Ppic from '../Images/ppic.webp';
function Header() {
  return (
      <div className='header-container'>
          <div className='header-photo'>
              <img src={Ppic} alt='photo' />
          </div>
          <div className='header-name'>
              <h1>Jakub Grych</h1>
              <h2>UX/UI Designer, Full-stack developer</h2>
          </div>
      </div>
  );
}

export default Header;