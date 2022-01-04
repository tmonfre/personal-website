import { FadeLoad } from '../../components';

import './styles.scss';

const ZoomCLI = (): JSX.Element => (
  <FadeLoad>
    <div id="zoom-cli-container">
      <h1>Zoom CLI</h1>
      <p>Command line tool for saving and launching Zoom meetings from the command line.</p>
      <p>
        Users can store recurring meetings or launch new ones.
        Available on macOS and Linux. Open source and free to download via Homebrew.
      </p>
      <div className="button-container">
        <a href="https://github.com/tmonfre/zoom-cli" target="_blank" rel="noreferrer">View on GitHub</a>
      </div>
    </div>
  </FadeLoad>
);

export default ZoomCLI;
