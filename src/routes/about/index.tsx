import {
  MouseEvent, useState, useEffect, useCallback,
} from 'react';
import { PageRoutes } from '../../constants';
import { ImageInformation } from './index.d';

import './styles.scss';

import LeftChevron from '../../assets/icons/left-chevron.png';
import RightChevron from '../../assets/icons/right-chevron.png';

import PersonalImg from '../../assets/images/personal.jpg';
import MoosilaukeImg from '../../assets/images/moosilauke.jpg';
import KillingtonImg from '../../assets/images/killington.jpg';
import TellurideImg from '../../assets/images/telluride.jpg';
import PicoImg from '../../assets/images/pico.jpg';

const images: ImageInformation[] = [
  { src: PersonalImg, alt: 'Me — 2018' },
  { src: MoosilaukeImg, alt: 'Peak of Mt. Moosilauke, Warren, NH — 2020' },
  { src: KillingtonImg, alt: 'Killington, VT — 2021' },
  { src: TellurideImg, alt: 'Telluride, CO — 2019' },
  { src: PicoImg, alt: 'Pico, VT — 2020' },
];

const About = (): JSX.Element => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>();

  const imageShuffler = (spacer: number) => () => {
    if (selectedImageIndex !== undefined) {
      const newValue = selectedImageIndex + spacer;

      if (newValue >= 0 && newValue < images.length) {
        setSelectedImageIndex(newValue);
      }
    }
  };

  function closeSelectedImage() {
    setSelectedImageIndex(undefined);
  }

  function handleBackgroundCloseClick(event: MouseEvent<HTMLDivElement>) {
    if ((event.target as HTMLDivElement).id === 'selected-image-holder') {
      closeSelectedImage();
    }
  }

  // close the selected image when esc pressed
  const onEscPressed = useCallback((event) => {
    if (event.keyCode === 27) {
      closeSelectedImage();
    }
  }, []);

  // set up key listener for esc
  useEffect(() => {
    document.addEventListener('keydown', onEscPressed);
    return () => {
      document.removeEventListener('keydown', onEscPressed);
    };
  }, [onEscPressed]);

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
        {images.map(({ src, alt }, index) => (
          <img src={src} alt={alt} key={alt} role="presentation" onClick={() => setSelectedImageIndex(index)} />
        ))}
      </div>
      {selectedImageIndex !== undefined && (
        <div id="selected-image-holder" onClick={handleBackgroundCloseClick} role="presentation">
          <div id="selected-image-container">
            <img
              alt="left chevron"
              className="chevron"
              onClick={imageShuffler(-1)}
              role="presentation"
              src={LeftChevron}
              style={selectedImageIndex === 0 ? { filter: 'invert(50%)' } : {}}
            />
            <img src={images[selectedImageIndex].src} alt={images[selectedImageIndex].alt} />
            <img
              alt="right chevron"
              className="chevron"
              onClick={imageShuffler(1)}
              role="presentation"
              src={RightChevron}
              style={selectedImageIndex === images.length - 1 ? { filter: 'invert(50%)' } : {}}
            />
          </div>
          <p>{images[selectedImageIndex].alt}</p>
        </div>
      )}
    </div>
  );
};

export default About;
