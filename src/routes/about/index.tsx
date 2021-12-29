import './styles.scss';

import { PageRoutes } from '../../constants';

// import ProfileImage from '../../assets/images/profile.png';

const About = (): JSX.Element => (
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
      . Working on
      {' '}
      <a href="https://www.disneyplus.com/" target="_blank" rel="noreferrer">Disney+</a>
      {' '}
      taught me how to build large applications at massive scale
      and create well structured code.
    </p>
    <p>
      I&apos;m most experienced with the following technologies:
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>React</li>
        <li>MySQL & MongoDB</li>
        <li>Python</li>
      </ul>
    </p>
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
      In my free time, I enjoy alpine skiing and being outdoors.
      I also love cooking, baking, and being with friends.
    </p>

    <div className="button-container">
      <a href={window.location.origin + PageRoutes.Resume} target="_blank" rel="noreferrer">View my resume</a>
    </div>

    <div className="line" />
    {/* <img src={ProfileImage} alt="me" /> */}
    {/* note this doesn't work in dev environment */}
    {/*
    <a href={window.location.origin + PageRoutes.Resume} target="_blank" rel="noreferrer">Resume</a>
    */}
  </div>
);

export default About;
