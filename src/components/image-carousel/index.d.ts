import { ImageInformation } from '../../index.d';

export type Props = {
    images: ImageInformation[];
    closeCarousel: () => void;
    selectedIndex: number;
    setSelectedIndex: (index: number) => void;
}
