import Projects from './component';
import { ProjectInformation } from './index.d';

import PineBeetleHome from '../../assets/projects/pine-beetle/home.png';
import PineBeetleTrappingData from '../../assets/projects/pine-beetle/trapping-data.png';
import PineBeetlePredictionMap from '../../assets/projects/pine-beetle/prediction-map.png';
import PineBeetlePredictionDetail from '../../assets/projects/pine-beetle/prediction-detail.png';

import MyBallotHomeGif from '../../assets/projects/myballot/home.gif';
import MyBallotHome from '../../assets/projects/myballot/home.png';
import MyBallotCompareCandidatesGif from '../../assets/projects/myballot/compare-candidates.gif';
import MyBallotQuiz from '../../assets/projects/myballot/quiz.png';

import SixAMAppHome from '../../assets/projects/6amhealth/app-home.jpg';
import SixAMAppReviewOrder from '../../assets/projects/6amhealth/review-order-mobile.jpg';
import SixAMWebHome from '../../assets/projects/6amhealth/order-web-home.png';
import SixAMAWebCheckout from '../../assets/projects/6amhealth/checkout-web.png';
import SixAMAdminOrder from '../../assets/projects/6amhealth/admin-order.png';

const projects: ProjectInformation[] = [{
  title: 'Zoom CLI',
  description: 'Command line tool for saving and launching Zoom meetings from the command line. Available on macOS and Linux. Open source and free to download via Homebrew.',
  technologies: ['Python'],
  images: [],
  github: [{ link: 'https://github.com/tmonfre/zoom-cli' }],
}, {
  title: 'Pine Beetle Outbreak Prediction',
  description: 'Website for visualizing and predicting movements of an invasive species impacting east-cost forests. Built in the DALI Lab partnering with the US Forest Service and Dartmouth Biology professors.',
  technologies: ['React', 'Node', 'MongoDB'],
  images: [
    { src: PineBeetleHome, alt: 'Project pine beetle home screen' },
    { src: PineBeetleTrappingData, alt: 'Graph of pine beetle trapping data' },
    { src: PineBeetlePredictionMap, alt: 'Map of pine beetle outbreak likelihoods' },
    { src: PineBeetlePredictionDetail, alt: 'Detailed statistics on outbreak likelihood for given county' },
  ],
  github: [
    { link: 'https://github.com/dali-lab/pine-beetle-frontend', tooltip: 'Frontend' },
    { link: 'https://github.com/dali-lab/pine-beetle-backend', tooltip: 'Backend' },
    { link: 'https://github.com/dali-lab/pine-beetle-automation', tooltip: 'Data pipeline' },
  ],
  web: 'https://www.spbpredict.com',
}, {
  title: 'MyBallot',
  description: 'Website for viewing ballots in local elections and learning about candidates. MyBallot crawls the Internet for information about each candidate and runs a sentiment analysis algorithm to infer how candidates stand on important issues. Team project for culminating experience of CS major.',
  technologies: ['React', 'Node', 'Python', 'MongoDB'],
  images: [
    { src: MyBallotHomeGif, alt: 'MyBallot discover elections' },
    { src: MyBallotCompareCandidatesGif, alt: 'MyBallot compare candidates' },
    { src: MyBallotQuiz, alt: 'MyBallot candidate matching quiz' },
    { src: MyBallotHome, alt: 'MyBallot home page' },
  ],
  web: 'https://my-ballot.netlify.app/',
}, {
  title: 'Starterpacks',
  description: 'Open source starter packs for full stack web applications. Repositories available for front-end with React and back-end with Express.js and MySQL. Both written in TypeScript and containerized for use with Docker.',
  technologies: ['TypeScript', 'Docker', 'Webpack', 'Babel', 'React', 'Node', 'MySQL'],
  images: [],
  github: [
    { link: 'https://github.com/tmonfre/example-typescript-webapp', tooltip: 'Web app' },
    { link: 'https://github.com/tmonfre/example-typescript-server', tooltip: 'Server' },
  ],
}, {
  title: '6AM Health',
  description: 'Mobile and web applications for ordering fresh food to Internet-connected vending machines throughout the Boston area. Built in the DALI Lab partnering with a Boston-based start-up.',
  technologies: ['React', 'React Native', 'Node', 'MongoDB'],
  images: [
    { src: SixAMWebHome, alt: '6AMHealth web order menu', width: 320 },
    { src: SixAMAWebCheckout, alt: '6AMHealth web order checkout', width: 320 },
    { src: SixAMAppHome, alt: '6AMHealth mobile app home', width: 320 },
    { src: SixAMAppReviewOrder, alt: '6AMHealth mobile app review order', width: 320 },
    { src: SixAMAdminOrder, alt: '6AMHealth internal admin order processing', width: 320 },
  ],
  web: 'https://order.6amhealth.com',
  appStore: 'https://apps.apple.com/us/app/6am-health/id1474745789',
}];

export default (): JSX.Element => <Projects projects={projects} />;
