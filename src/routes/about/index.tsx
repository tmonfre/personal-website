import './styles.scss';

import { MouseEvent, useState } from 'react';
import { PageRoutes } from '../../constants';

import PersonalImg from '../../assets/images/personal.jpg';
import MoosilaukeImg from '../../assets/images/moosilauke.jpg';
import KillingtonImg from '../../assets/images/killington.jpg';
import TellurideImg from '../../assets/images/telluride.jpg';
import PicoImg from '../../assets/images/pico.jpg';

const images = [
  { src: PersonalImg, alt: 'me' },
  { src: MoosilaukeImg, alt: 'me with three friends at peak of Mt. Moosilauke' },
  { src: KillingtonImg, alt: 'surrounding mountains at Killington' },
  { src: TellurideImg, alt: 'surrounding mountains at Telluride' },
  { src: PicoImg, alt: 'two friends at Pico summit' },
];

const About = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<HTMLImageElement>();

  function onImageClick(event: MouseEvent<HTMLImageElement>) {
    event.preventDefault();
    setSelectedImage(event.currentTarget);
  }

  function onImageClose() {
    setSelectedImage(undefined);
  }

  return (
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
        and create well structured code.
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
        I graduated magna cum laude from
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
        I also enjoy cooking, baking, and being with friends.
      </p>
      <div className="button-container">
        <a href={window.location.origin + PageRoutes.Resume} target="_blank" rel="noreferrer">View my resume</a>
      </div>
      <div className="line" />
      <div id="image-container">
        {images.map(({ src, alt }) => (
          <img src={src} alt={alt} key={alt} role="presentation" onClick={onImageClick} />
        ))}
      </div>

      {selectedImage && (
        <div id="selected-image-holder">
          <div id="selected-image-container">
            <button type="button" onClick={onImageClose}>Close</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
