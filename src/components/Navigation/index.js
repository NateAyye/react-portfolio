import { LINKS } from "../../config/constants";
import './styles.css';

function Navigation({ currentPage, setCurrentTab }) {
  return (
    <nav aria-labelledby='primary-navigation-label'>
      <span className='sr-only' id='primary-navigation-label' >Primary Navigation</span>
      <ul className='navigation__links'>
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
  )
}

export default Navigation;