import { Props } from './index.d';
import './styles.scss';

const Projects = (props: Props): JSX.Element => {
  const { projects } = props;

  return (
    <div id="projects-container">
      <h1>Projects</h1>
      <div id="project-preview-container">
        {projects.map(({ title, description, technologies }) => (
          <div className="project-container" key={title}>
            <div className="project-text">
              <h2>{title}</h2>
              <p className="description">{description}</p>
              <p className="tech-used">{technologies.join(' — ')}</p>
              <p>Link Link Link Link</p>
            </div>
            <div className="project-image-container" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
