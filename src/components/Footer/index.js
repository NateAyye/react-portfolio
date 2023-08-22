import './styles.css';

function Footer() {
  return (
    <footer>
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
    </footer>
  );
}

export default Footer;