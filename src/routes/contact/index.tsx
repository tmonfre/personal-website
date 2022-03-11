import { FadeLoad } from '../../components';

import './styles.scss';

const Contact = (): JSX.Element => (
  <FadeLoad>
    <div id="contact-container">
      <h1>Contact</h1>
      <p>
        Have a question or want to get in touch? My inbox is always open.
        I&apos;ll try my best to get back to you quickly.
      </p>
      <div className="button-container">
        <a href="mailto:tmonfre1@gmail.com" target="_blank" rel="noreferrer">Send an email</a>
        <a href="https://www.linkedin.com/in/thomas-monfre" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
      </div>
    </div>
  </FadeLoad>
);

export default Contact;
