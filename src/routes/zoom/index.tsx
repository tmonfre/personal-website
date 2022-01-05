import { FadeLoad } from '../../components';

import CopyIcon from '../../assets/icons/copy.png';

import './styles.scss';

const installationCommands = [
  'brew tap tmonfre/homebrew-tmonfre',
  'brew install zoom',
];

const ZoomCLI = (): JSX.Element => {
  function copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text);
  }

  return (
    <FadeLoad>
      <div id="zoom-cli-container">
        <h1>Zoom CLI</h1>
        <p>Command line tool for saving and launching Zoom meetings from the command line.</p>
        <p>
          Users can store recurring meetings or launch new ones.
          Available on macOS and Linux. Open source and free to download via Homebrew.
        </p>
        <h3>Installation Instructions:</h3>
        <div id="installation-instructions-container">
          {installationCommands.map((command) => (
            <div className="command-container">
              <div>
                <span className="marker">$</span>
                <span className="command">{command}</span>
              </div>
              <img
                alt="copy icon"
                onClick={() => copyToClipboard(command)}
                role="presentation"
                src={CopyIcon}
              />
            </div>
          ))}
        </div>
        <p>See GitHub repository for further information, including usage instructions.</p>
        <div className="button-container">
          <a href="https://github.com/tmonfre/zoom-cli" target="_blank" rel="noreferrer">View on GitHub</a>
        </div>
      </div>
    </FadeLoad>
  );
};

export default ZoomCLI;
