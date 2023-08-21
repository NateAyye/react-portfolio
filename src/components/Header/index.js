import { LINKS } from '../../config/constants';
import './styles.css';

function Header({ currentPage, setCurrentPage }) {

  function setCurrentTab(link) {
    setCurrentPage(link);
    localStorage.setItem('currentPage', link);
  }

  return (
    <header className="header">
      <a className='skip-to-main' href='#main' >Skip to Main Content</a>
      <div className='header__container'>
        <h1>Nathan Cuevas</h1>
        <nav aria-labelledby='primary-navigation-label'>
          <span className='sr-only' id='primary-navigation-label' >Primary Navigation</span>
          <ul className='header__links'>
            {LINKS.map(link => (
              <li key={link}>
                <button
                  className={` ${ currentPage === link ? 'active' : '' } `}
                  onClick={() => setCurrentTab(link)}>
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;