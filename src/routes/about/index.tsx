import './styles.scss';

import { PageRoutes } from '../../constants';

import ProfileImage from '../../assets/images/profile.png';

const About = (): JSX.Element => (
  <div id="about-container">
    <p>About</p>
    <img src={ProfileImage} alt="me" />
    {/* note this doesn't work in dev environment */}
    <a href={window.location.origin + PageRoutes.Resume} target="_blank" rel="noreferrer">Resume</a>
  </div>
);

export default About;
