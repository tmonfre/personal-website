import ReactTooltip from 'react-tooltip';

import { Props } from './index.d';
import { FadeLoad } from '../../components';
import ProjectPreview from './project-preview';

import './styles.scss';

const Projects = (props: Props): JSX.Element => {
  const {
    standaloneProjects,
    imageProjects,
  } = props;

  return (
    <FadeLoad>
      <div id="projects-container">
        <h1>Projects</h1>
        <div id="standalone-project-preview-container">
          {standaloneProjects.map((project) => (
            <ProjectPreview project={project} />
          ))}
        </div>
        <div id="project-preview-container">
          {imageProjects.map((project) => (
            <ProjectPreview project={project} />
          ))}
        </div>
        <ReactTooltip />
      </div>
    </FadeLoad>
  );
};

export default Projects;
