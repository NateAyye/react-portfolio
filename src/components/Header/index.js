import './styles.css';

function Header({ currentPage, setCurrentPage }) {

  return (
    <header className="header">
      <a className='skip-to-main' href='#main' >Skip to Main Content</a>
      <div className='header__container'>
        <h1>Nathan Cuevas</h1>
        <nav aria-labelledby='primary-navigation-label'>
          <span className='sr-only' id='primary-navigation-label' >Primary Navigation</span>
          <ul className='header__links'>
            <li>
              <button onClick={() => setCurrentPage('About')}>About Me</button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('Portfolio')} >Portfolio</button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('Contact')} >Contact Me</button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('Resume')} >Resume</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;