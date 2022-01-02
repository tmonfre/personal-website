import { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

import { Props } from './index.d';
import { ImageCarousel, FadeLoad } from '../../components';

import GitHubIcon from '../../assets/icons/github.png';
import ShareIcon from '../../assets/icons/share.png';
import TagIcon from '../../assets/icons/tag.png';

import './styles.scss';

const DEFAULT_PROJECT_IMAGE_WIDTH = 275;

const Projects = (props: Props): JSX.Element => {
  const { projects } = props;

  const [imageContainerWidth, setImageContainerWidth] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<string>();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>();
  const [imageLoadStatus, setImageLoadStatus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      setImageContainerWidth(event[0].contentBoxSize[0].inlineSize);
    });

    resizeObserver.observe(document.getElementsByClassName('project-image-container')[0]);
  });

  return (
    <FadeLoad>
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
                {images.map(({ src, alt, width: overrideWidth }, index) => {
                  const width = overrideWidth || DEFAULT_PROJECT_IMAGE_WIDTH;
                  const marginLeftAmount = index * (
                    width - (((width * images.length) - imageContainerWidth)) / (images.length - 1)
                  );

                  return (
                    <img
                      alt={alt}
                      className={imageLoadStatus[src] ? 'image-loaded' : ''}
                      key={src}
                      onClick={() => {
                        setSelectedImageIndex(index);
                        setSelectedProject(title);
                      }}
                      onLoad={() => setImageLoadStatus((curr) => ({ ...curr, [src]: true }))}
                      role="presentation"
                      src={src}
                      style={{
                        marginLeft: `${marginLeftAmount}px`,
                        zIndex: images.length - index,
                      }}
                    />
                  );
                })}
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
    </FadeLoad>
  );
};

export default Projects;
