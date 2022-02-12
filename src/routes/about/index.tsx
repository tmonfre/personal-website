import About from './component';

import { ImageInformation } from '../../index.d';

import PersonalImg from '../../assets/images/about/personal.jpg';
import KillingtonImg from '../../assets/images/about/killington.jpg';
import TellurideImg from '../../assets/images/about/telluride.jpg';
import MunisingImg from '../../assets/images/about/munising.jpg';
import StoweImg from '../../assets/images/about/stowe.jpg';

const images: ImageInformation[] = [
  { src: PersonalImg, alt: 'Me — 2018' },
  { src: StoweImg, alt: 'Stowe, VT — 2021' },
  { src: KillingtonImg, alt: 'Killington, VT — 2021' },
  { src: TellurideImg, alt: 'Telluride, CO — 2019' },
  { src: MunisingImg, alt: 'Munising, MI — 2021' },
];

export default (): JSX.Element => <About images={images} />;
