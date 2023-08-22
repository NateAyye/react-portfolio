import { TypeAnimation } from 'react-type-animation';
import heroImg from '../../assets/hero_img2.png';
import './styles.css';
function Hero() {
  return (
    <div className="hero_section">
      <div className='hero_section__description'>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            'Looking for Backend?',
            3000,
            'Looking for Frontend?',
            3000,
            'Looking for Full Stack?',
            3000,
            'Looking for Me?',
            10000,
          ]}
          speed={10}
          repeat={1}
          cursor={true}
          spellCheck
          style={{ fontSize: '2em', fontWeight: '700', color: 'hsla(var(--black), 1)' }}
        />
        <br />
        <p>
          I'm a Full Stack Developer with just over 1 year of experience in the industry. I have a passion for learning and sharing my knowledge with others as publicly as possible. I have a good experience in developing web applications using ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, HTML, CSS, JavaScript, Bootstrap, Material UI, Git, GitHub, and Heroku.
        </p>
      </div>
      <div className='hero_section__image'>
        <img alt='Developer' src={heroImg} />
      </div>
    </div>
  )
}

export default Hero;