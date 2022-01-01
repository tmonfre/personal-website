import Projects from './component';
import { ProjectInformation } from './index.d';

const projects: ProjectInformation[] = [{
  title: 'Zoom CLI',
  description: 'Command line tool for saving and launch Zoom meetings from the command line. Available on macOS and Linux. Open source and free to download via Homebrew.',
  technologies: ['Python'],
  images: [],
  github: ['https://github.com/tmonfre/zoom-cli'],
}, {
  title: 'Pine Beetle Outbreak Prediction',
  description: 'Website for visualizing and predicting movements of an invasive species impacting east-cost forests. Built in the DALI Lab partnering with the US Forest Service and Dartmouth Biology professors.',
  technologies: ['React', 'Node', 'MongoDB'],
  images: [],
  github: ['https://github.com/dali-lab/pine-beetle-frontend', 'https://github.com/dali-lab/pine-beetle-backend', 'https://github.com/dali-lab/pine-beetle-automation'],
}, {
  title: 'MyBallot',
  description: 'Website for viewing ballots in local elections and learning about candidates. MyBallot crawls the Internet for information about each candidate and runs a sentiment analysis algorithm to infer how candidates stand on important issues. Team project for culminating experience of CS major.',
  technologies: ['React', 'Node', 'Python', 'MongoDB'],
  images: [],
  web: 'https://my-ballot.netlify.app/',
}, {
  title: 'Starterpacks',
  description: 'Open source starter packs for full stack web applications. Repositories available for front-end with React and back-end with Express.js and MySQL. Both written in TypeScript and containerized for use with Docker.',
  technologies: ['TypeScript', 'Docker', 'Webpack', 'Babel', 'React', 'Node', 'MySQL'],
  images: [],
  github: ['https://github.com/tmonfre/example-typescript-webapp', 'https://github.com/tmonfre/example-typescript-server'],
}, {
  title: '6AM Health',
  description: 'Mobile and web applications for ordering fresh food to Internet-connected vending machines throughout the Boston area. Built in the DALI Lab partnering with a Boston-based start-up.',
  technologies: ['React', 'React Native', 'Node', 'MongoDB'],
  images: [],
  web: 'https://order.6amhealth.com',
  appStore: 'https://apps.apple.com/us/app/6am-health/id1474745789',
}];

export default (): JSX.Element => <Projects projects={projects} />;
