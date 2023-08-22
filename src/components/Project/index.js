import './styles.css';

function Project({ project }) {
  return (
    <div className='projects__card'>
      <img alt={`${ project.title } github project`} src={project.image} />
      <div className='project__details'>
        <a href={project.site ?? '#'} target='_blank' rel='noreferrer' className='project__title' >
          <h3>{project.title}</h3>
        </a>
        <a href={project.link} target='_blank' rel='noreferrer'>
          <i className="nf nf-fa-github_alt"></i>
        </a>
        <br />
        {project.stack && (
          <small>{project.stack}</small>
        )}
      </div>
    </div>
  )
}

export default Project;