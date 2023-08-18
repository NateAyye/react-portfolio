import './styles.css';

function Header() {
  return (
    <header className="header">
      <a className='skip-to-main' href='#main' >Skip to Main Content</a>
      <div className='header__container'>
        <h1>Nathan Cuevas</h1>
        <nav aria-labelledby='primary-navigation-label'>
          <span className='sr-only' id='primary-navigation-label' >Primary Navigation</span>
          <ul className='primary-nav-links'>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact-me">Contact Me</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;