import { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

import { Props } from './index.d';
import { ImageCarousel } from '../../components';

import GitHubIcon from '../../assets/icons/github.png';
import ShareIcon from '../../assets/icons/share.png';
import TagIcon from '../../assets/icons/tag.png';

import './styles.scss';

const PROJECT_IMAGE_WIDTH = 275;

const Projects = (props: Props): JSX.Element => {
  const { projects } = props;

  const [imageContainerWidth, setImageContainerWidth] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<string>();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>();

  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      setImageContainerWidth(event[0].contentBoxSize[0].inlineSize);
    });

    resizeObserver.observe(document.getElementsByClassName('project-image-container')[0]);
  });

  return (
    <div id="projects-container">
      <h1>Projects</h1>
      <div id="project-preview-container">
        {projects.map(({
          appStore,
          description,
          github,
          images,
          technologies,
          title,
          web,
        }) => (
          <div className="project-container" key={title}>
            <div className="project-text">
              <h2>{title}</h2>
              <p className="description">{description}</p>
              <p className="tech-used">{technologies.join(' — ')}</p>
              <div className="link-container">
                {(github?.length || 0) > 0 && github?.map(({ link, tooltip }) => (
                  <a className="github-icon" href={link} target="_blank" rel="noreferrer" data-tip={tooltip} key={link}>
                    <img src={GitHubIcon} alt="github icon" />
                  </a>
                ))}
                {(web && (
                  <a className="web-icon" href={web} target="_blank" rel="noreferrer">
                    <img src={ShareIcon} alt="share icon" data-tip="Web link" />
                  </a>
                ))}
                {(appStore && (
                  <a className="app-store-icon" href={appStore} target="_blank" rel="noreferrer">
                    <img src={TagIcon} alt="app store icon" data-tip="iOS App Store" />
                  </a>
                ))}
              </div>
            </div>
            <div className="project-image-container">
              {images.map(({ src, alt }, index) => (
                <img
                  src={src}
                  alt={alt}
                  key={src}
                  style={{
                    marginLeft: `${index * (PROJECT_IMAGE_WIDTH - (((PROJECT_IMAGE_WIDTH * images.length) - imageContainerWidth)) / (images.length - 1))}px`,
                    zIndex: images.length - index,
                  }}
                  onClick={() => {
                    setSelectedImageIndex(index);
                    setSelectedProject(title);
                  }}
                  role="presentation"
                />
              ))}
            </div>
            {selectedImageIndex !== undefined && selectedProject === title && (
              <ImageCarousel
                closeCarousel={() => setSelectedImageIndex(undefined)}
                images={images}
                selectedIndex={selectedImageIndex}
                setSelectedIndex={setSelectedImageIndex}
              />
            )}
          </div>
        ))}
      </div>
      <ReactTooltip />
    </div>
  );
};

export default Projects;
