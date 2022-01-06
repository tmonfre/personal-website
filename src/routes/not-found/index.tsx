import { Link } from 'react-router-dom';
import { PageRoutes } from '../../constants';
import { FadeLoad } from '../../components';

import './styles.scss';

const NotFound = (): JSX.Element => (
  <FadeLoad>
    <div id="not-found-container">
      <h1>Not Found</h1>
      <p>Sorry! The page you requested doesn&apos;t exist.</p>
      <Link to={PageRoutes.Home}>Go home.</Link>
    </div>
  </FadeLoad>
);

export default NotFound;
