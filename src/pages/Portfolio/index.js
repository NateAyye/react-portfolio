import Project from '../../components/Project';
import { PROJECTS } from '../../config/constants';


function Portfolio() {
  return (
    <div style={{ padding: '0 2rem' }}>
      <section style={{ maxWidth: '1100px', margin: '2rem auto' }} id='main'>
        <h2>Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {PROJECTS.map((project) => (
            <Project key={project.repo} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Portfolio;