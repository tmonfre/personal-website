import { Link } from 'react-router-dom';
import { PageRoutes } from '../../constants';

import './styles.scss';

const NavBar = (): JSX.Element => (
  <nav>
    <Link to={PageRoutes.Home}>Example Webapp</Link>
  </nav>
);

export default NavBar;
