import { Link } from 'react-router-dom';
import './styles.scss';

const NotFound = (): JSX.Element => (
  <div id="not-found-container">
    <p>Sorry! This page cannot be found.</p>
    <Link to="/">Go home.</Link>
  </div>
);

export default NotFound;
