import { Link } from 'react-router-dom';
import { PageRoutes } from '../../constants';

import './styles.scss';

const Home = (): JSX.Element => (
  <div id="home-container">
    <div id="info-section">
      <p>Hi there! 👋 My name is</p>
      <h1>Thomas Monfre</h1>
      <div id="text-section">
        <h3>
          I&apos;m a software engineer residing in New York City.
        </h3>
        <h3>
          I graduated from
          {' '}
          <a href="https://www.dartmouth.edu/" target="_blank" rel="noreferrer">Dartmouth College</a>
          {' '}
          in June 2021, and currently work at
          {' '}
          <a href="https://www.palantir.com/" target="_blank" rel="noreferrer">Palantir Technologies</a>
          {' '}
          as a Forward Deployed Engineer.
        </h3>
      </div>
      <div id="button-container">
        <Link to={PageRoutes.About}>View more about me</Link>
      </div>
    </div>
    {/* <div className="line" /> */}
  </div>
);

export default Home;
