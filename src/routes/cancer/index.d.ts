import { ImageInformation } from '../../index.d';

export type CancerOrganization = {
    title: string;
    href: string;
}

export type CancerImages = {
    survivorTree: ImageInformation;
}

export type Props = {
    images: CancerImages;
    organizations: CancerOrganization[];
}
