import noteTakerImg from '../assets/images/custom-note-taker.png';
import darkThemeImg from '../assets/images/dark-theme.png';
import fiGlance from '../assets/images/fiGlance.png';
import jateImg from '../assets/images/jate.png';
import svGen from '../assets/images/svgen.png';
import techBlogImg from '../assets/images/tech-blog.png';


export const LINKS = [
  'About Me',
  'Portfolio',
  'Resume',
  'Contact Me'
]

export const PROJECTS = [
  {
    title: 'J.A.T.E',
    repo: 'https://github.com/NateAyye/local-text-editor-pwa',
    site: 'https://still-waters-26108-e681736f7556.herokuapp.com/',
    image: jateImg,
    stack: 'MERN Stack'
  },
  {
    title: 'Tech Blog',
    repo: 'https://github.com/NateAyye/tech-jab-io',
    image: techBlogImg,
    stack: 'MERN Stack'
  },
  {
    title: 'Fi Glance',
    repo: 'https://github.com/NateAyye/Personal-Finance-Manager',
    site: 'https://secret-wave-14791-042522c892db.herokuapp.com/',
    image: fiGlance,
    stack: 'MSQL, Express, HBS, Node'
  },
  {
    title: 'Custom Note Taker',
    repo: 'https://github.com/NateAyye/custom-note-taker',
    site: 'https://sleepy-ridge-83415.herokuapp.com/',
    image: noteTakerImg,
    stack: 'Express, Node, FS'
  },
  {
    title: 'VS Code Dark Theme',
    repo: 'https://github.com/NateAyye/custom-github-dark-theme',
    site: 'https://marketplace.visualstudio.com/items?itemName=NathanCuevas.custom-github-dark-dimmed',
    image: darkThemeImg,
    stack: 'VS Code Extension'
  },
  {
    title: 'SVG LOGO MAKER',
    repo: 'https://github.com/NateAyye/svg-logo-maker',
    site: 'https://www.npmjs.com/package/svg-logo-maker',
    image: svGen,
    stack: 'NPM Package'
  }
]
