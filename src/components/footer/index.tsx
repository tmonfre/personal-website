import './styles.scss';

import GitHubIcon from '../../assets/icons/github.png';
import LinkedInIcon from '../../assets/icons/linkedin.png';
import EmailIcon from '../../assets/icons/mail.png';

const Footer = (): JSX.Element => (
  <footer>
    <a href="https://github.com/tmonfre" target="_blank" rel="noreferrer">
      <img src={GitHubIcon} alt="github" />
    </a>
    <a href="https://www.linkedin.com/in/thomas-monfre/" target="_blank" rel="noreferrer">
      <img src={LinkedInIcon} alt="linkedin" />
    </a>
    <a href="mailto:tmonfre1@gmail.com">
      <img src={EmailIcon} alt="email" />
    </a>
  </footer>
);

export default Footer;
