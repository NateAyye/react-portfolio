import Navigation from '../Navigation';
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
        <Navigation currentPage={currentPage} setCurrentTab={setCurrentTab} />
      </div>
    </header>
  );
}

export default Header;