import Cancer from './component';
import { CancerImages, CancerOrganization } from './index.d';

import SurvivorTreeImg from '../../assets/images/cancer/survivor-tree.jpg';

const images: CancerImages = {
  survivorTree: { src: SurvivorTreeImg, alt: 'Standing next to the survivor tree on my last day of treatment.' },
};

const organizations: CancerOrganization[] = [
  { title: 'American Cancer Society', href: 'https://www.cancer.org/involved.html' },
  { title: 'Cancer Research Institute', href: 'https://www.cancerresearch.org' },
  { title: 'Leukemia & Lymphoma Society', href: 'https://www.lls.org' },
  { title: 'Livestrong Foundation', href: 'https://www.livestrong.org' },
  { title: 'New York Cancer Foundation', href: 'https://www.nycancerfoundation.org' },
  { title: 'Samuel Waxman Cancer Research Foundation', href: 'https://www.waxmancancer.org' },
  { title: 'Bellin Health Foundation', href: 'https://www.bellin.org/bellin_foundation' },
];

export default (): JSX.Element => <Cancer images={images} organizations={organizations} />;
