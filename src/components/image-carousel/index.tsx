import {
  MouseEvent,
  useCallback,
  useEffect,
} from 'react';

import { Props } from './index.d';

import LeftChevron from '../../assets/icons/left-chevron.png';
import RightChevron from '../../assets/icons/right-chevron.png';

import './styles.scss';

const ImageCarousel = (props: Props): JSX.Element => {
  const {
    closeCarousel,
    images,
    selectedIndex,
    setSelectedIndex,
  } = props;

  const imageShuffler = (spacer: number) => () => {
    if (selectedIndex !== undefined) {
      const newValue = selectedIndex + spacer;

      if (newValue >= 0 && newValue < images.length) {
        setSelectedIndex(newValue);
      }
    }
  };

  function handleBackgroundCloseClick(event: MouseEvent<HTMLDivElement>) {
    if ((event.target as HTMLDivElement).id === 'selected-image-holder') {
      closeCarousel();
    }
  }

  // close the selected image when esc pressed
  const onEscPressed = useCallback((event) => {
    if (event.keyCode === 27) {
      closeCarousel();
    }
  }, []);

  // set up key listener for esc
  useEffect(() => {
    document.addEventListener('keydown', onEscPressed);
    return () => {
      document.removeEventListener('keydown', onEscPressed);
    };
  }, [onEscPressed]);

  return (
    <div id="selected-image-holder" onClick={handleBackgroundCloseClick} role="presentation">
      <div id="selected-image-container">
        <img
          alt="left chevron"
          className="chevron"
          onClick={imageShuffler(-1)}
          role="presentation"
          src={LeftChevron}
          style={selectedIndex === 0 ? { filter: 'invert(50%)' } : {}}
        />
        <img src={images[selectedIndex].src} alt={images[selectedIndex].alt} />
        <img
          alt="right chevron"
          className="chevron"
          onClick={imageShuffler(1)}
          role="presentation"
          src={RightChevron}
          style={selectedIndex === images.length - 1 ? { filter: 'invert(50%)' } : {}}
        />
      </div>
      <p>{images[selectedIndex].alt}</p>
    </div>
  );
};

export default ImageCarousel;
