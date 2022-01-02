import { useEffect, useState } from 'react';
import { Props } from './index.d';

import './styles.scss';

const FadeLoad = (props: Props): JSX.Element => {
  const {
    children,
    contentWhileLoading,
    timeout = 300,
  } = props;

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), timeout);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isLoaded && contentWhileLoading}
      <div className={isLoaded ? 'loaded' : 'not-loaded'}>
        {children}
      </div>
    </>
  );
};

export default FadeLoad;
