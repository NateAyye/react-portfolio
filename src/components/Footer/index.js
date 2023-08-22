import './styles.css';

function Footer() {
  return (
    <footer>
      <div style={{ color: 'hsla(var(--white), 1)' }}>
        <p>&copy; {new Date().getFullYear()} Nathan Cuevas</p>
      </div>
      <nav className='external__navigation' aria-labelledby='external__navigation-label' >
        <span id='external__navigation-label' className='sr-only' >External Links</span>
        <ul>
          <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/NateAyye' >
              <i className="nf nf-fa-github_alt"></i>
              GitHub
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/nathan-cuevas-a20712105/' >
              <i className="nf nf-fa-linkedin_square"></i>
              Linked In
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='https://stackoverflow.com/users/21148929/nateayye' >
              <i className="nf nf-fa-stack_overflow"></i>
              Stack Overflow
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/NateAyye/react-portfolio" />
      </div>
    </footer>
  );
}

export default Footer;