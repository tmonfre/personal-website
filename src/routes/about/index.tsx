import './styles.scss';

import ProfileImage from '../../assets/profile.png';

const About = (): JSX.Element => (
  <div id="about-container">
    <p>About</p>
    <img src={ProfileImage} alt="me" />
  </div>
);

export default About;
