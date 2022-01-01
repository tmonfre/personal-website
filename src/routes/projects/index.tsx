import './styles.scss';

const Projects = (): JSX.Element => (
  <div id="projects-container">
    <h1>Projects</h1>
    <div id="project-preview-container">
      <div className="project-container">
        <div className="project-text">
          <h2>Zoom CLI</h2>
          <p className="description">
            Command line tool for saving and launch Zoom meetings from the command line.
            Available on macOS and Linux. Open source and free to download via Homebrew.
          </p>
          <p className="tech-used">Python</p>
          <p>Link Link Link Link</p>
        </div>
        <div className="project-image-container" />
      </div>
      <div className="project-container">
        <div className="project-text">
          <h2>Pine Beetle Outbreak Prediction</h2>
          <p className="description">
            Website for visualizing and predicting movements of an invasive species
            impacting east-cost forests. Built in the DALI Lab partnering
            with the US Forest Service and Dartmouth Biology professors.
          </p>
          <p className="tech-used">React, Node, MongoDB</p>
          <p>Link Link Link Link</p>
        </div>
        <div className="project-image-container" />
      </div>
      <div className="project-container">
        <div className="project-text">
          <h2>MyBallot</h2>
          <p className="description">
            Website for viewing ballots in local elections and learning about candidates.
            MyBallot crawls the Internet for information about
            each candidate and runs a sentiment analysis algorithm to infer
            how candidates stand on important issues.
            Team project for culminating experience of CS major.
          </p>
          <p className="tech-used">React, Node, Python, MongoDB</p>
          <p>Link Link Link Link</p>
        </div>
        <div className="project-image-container" />
      </div>
      <div className="project-container">
        <div className="project-text">
          <h2>Starterpacks</h2>
          <p className="description">
            Open source starter packs for full stack web applications. Repositories
            available for front-end with React and back-end with Express.js and MySQL.
            Both written in TypeScript and containerized for use with Docker.
          </p>
          <p className="tech-used">TypeScript, Docker, Webpack, Babel, React, Node, MySQL</p>
          <p>Link Link Link Link</p>
        </div>
        <div className="project-image-container" />
      </div>
      <div className="project-container">
        <div className="project-text">
          <h2>6AM Health</h2>
          <p className="description">
            Mobile and web applications for ordering fresh food to Internet-connected
            vending machines throughout the Boston area. Built in
            the DALI Lab partnering with a Boston-based start-up.
          </p>
          <p className="tech-used">React, React Native, Node, MongoDB</p>
          <p>Link Link Link Link</p>
        </div>
        <div className="project-image-container" />
      </div>
    </div>
  </div>
);

export default Projects;
