import { Link } from 'react-router-dom';
import { PageRoutes } from '../../constants';

import './styles.scss';

const NotFound = (): JSX.Element => (
  <div id="not-found-container">
    <p>Sorry! This page cannot be found.</p>
    <Link to={PageRoutes.Home}>Go home.</Link>
  </div>
);

export default NotFound;
