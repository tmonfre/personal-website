import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Props } from './index.d';
import { PageRoutes } from '../../constants';
import { ImageCarousel, FadeLoad } from '../../components';

import './styles.scss';

const About = (props: Props): JSX.Element => {
  const { images } = props;

  const [selectedImageIndex, setSelectedImageIndex] = useState<number>();
  const [imageLoadStatus, setImageLoadStatus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setImageLoadStatus(images.reduce((acc, curr) => ({
      ...acc,
      [curr.src]: false,
    }), {}));
  }, [images]);

  return (
    <FadeLoad>
      <div id="about-container">
        <h1>About Me</h1>
        <p>
          Hello! My name is Thomas.
          I&apos;m a software engineer interested in full-stack web development,
          big data, and the future of the Internet.
        </p>
        <p>
          I&apos;m a Forward Deployed Engineer at
          {' '}
          <a href="https://www.palantir.com/" target="_blank" rel="noreferrer">Palantir Technologies</a>
          ,
          where I help build software to solve hard problems. I previously interned at
          {' '}
          <a href="https://www.disneystreaming.com/" target="_blank" rel="noreferrer">Disney Streaming Services</a>
          . Working on Disney+ taught me how to build large applications at massive scale
          and create well-structured code.
        </p>
        <p id="list-header">I&apos;m most experienced with the following technologies:</p>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>React</li>
          <li>MySQL & MongoDB</li>
          <li>Python</li>
        </ul>
        <p>
          I graduated
          {' '}
          <span>magna cum laude</span>
          {' '}
          from
          {' '}
          <a href="https://www.dartmouth.edu/" target="_blank" rel="noreferrer">Dartmouth College</a>
          {' '}
          in June 2021 with a BA in Computer Science and a minor in Quantitative Social Science.
          At Dartmouth, I worked in the
          {' '}
          <a href="https://www.dali.dartmouth.edu/" target="_blank" rel="noreferrer">DALI Lab</a>
          {' '}
          where I gained valuable, hands-on experience building web and mobile applications.
        </p>
        <p>
          In my free time, I love to ski and explore the outdoors.
          I also enjoy cooking, baking, and spending time with friends.
        </p>
        <p>
          I am a proud cancer survivor.
          Read about my journey and join me in the fight against cancer
          {' '}
          <Link to={PageRoutes.Cancer}>here</Link>
          .
        </p>
        <div className="button-container">
          <a href={window.location.origin + PageRoutes.Resume} target="_blank" rel="noreferrer">View my resume</a>
          <Link to={PageRoutes.Projects}>View my projects</Link>
        </div>
        <div className="line" />
        <div id="image-container">
          {images.map(({ src, alt }, index) => (
            <img
              alt={alt}
              className={imageLoadStatus[src] ? 'image-loaded' : ''}
              key={alt}
              onClick={() => setSelectedImageIndex(index)}
              onLoad={() => setImageLoadStatus((curr) => ({ ...curr, [src]: true }))}
              role="presentation"
              src={src}
            />
          ))}
        </div>
        {selectedImageIndex !== undefined && (
          <ImageCarousel
            closeCarousel={() => setSelectedImageIndex(undefined)}
            images={images}
            selectedIndex={selectedImageIndex}
            setSelectedIndex={setSelectedImageIndex}
          />
        )}
      </div>
    </FadeLoad>
  );
};

export default About;
