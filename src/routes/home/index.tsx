import './styles.scss';

const Home = (): JSX.Element => (
  <div id="home-container">
    <div id="info-section">
      <p>Hi there! 👋 My name is Thomas.</p>
      <p>
        I&apos;m a software engineer, residing in New York City.
      </p>
      <p>
        I graduated from Dartmouth College in June 2021, and currently work at
        {' '}
        <a href="https://www.palantir.com/" target="_blank" rel="noreferrer">Palantir Technologies</a>
        {' '}
        as a Forward Deployed Engineer.
      </p>
    </div>
    <div className="line" />
  </div>
);

export default Home;
