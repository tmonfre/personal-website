import { ImageInformation } from '../../index.d';

export type GitHubLink = {
    link: string;
    tooltip?: string;
}

export type ProjectInformation = {
    title: string;
    description: string;
    technologies: string[];
    images: ImageInformation[];
    github?: GitHubLink[];
    web?: string;
    appStore?: string;
}

export type Props = {
    projects: ProjectInformation[];
}
