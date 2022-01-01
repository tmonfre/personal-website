import { ImageInformation } from '../../index.d';

export type ProjectInformation = {
    title: string;
    description: string;
    technologies: string[];
    images: ImageInformation[];
    github?: string[];
    web?: string;
    appStore?: string;
}

export type Props = {
    projects: ProjectInformation[];
}
