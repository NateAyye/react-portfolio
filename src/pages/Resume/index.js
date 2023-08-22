import './styles.css';

import resumePDF from '../../assets/resume.pdf';

const FRONTEND_PROFICIENCIES = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'JQuery',
  'Responsive Design',
  'React',
  'Next.JS',
  'Bootstrap',
  'TailwindCSS'
]

const BACKEND_PROFICIENCIES = [
  'APIs',
  'Node',
  'Express',
  'Handlebars',
  'MySQL, Sequelize',
  'MongoDB, Mongoose',
  'REST',
  'GraphQL',
  'MVC'
]

function Resume() {
  return (
    <section id='main' className='resume-page'>
      <h2>Resume</h2>
      <p>
        download my <a href={resumePDF} download={'nathan-cuevas-resume'}>resume</a>
      </p>
      <div className='proficiencies-container'>

      <section className='proficiency-list'>
        <h3>Front-End Proficiencies</h3>
        <ul>
          {FRONTEND_PROFICIENCIES.map((proficiency) => (
            <li key={proficiency}>{proficiency}</li>
          ))}
        </ul>
      </section>

      <section className='proficiency-list'>
        <h3>Back-End Proficiencies</h3>
        <ul>
          {BACKEND_PROFICIENCIES.map((proficiency) => (
            <li key={proficiency}>{proficiency}</li>
          ))}
        </ul>
      </section>
      </div>

    </section>
  )
}

export default Resume;