import { Link } from 'react-router-dom';
import { PageRoutes } from '../../constants';

import './styles.scss';

const NavBar = (): JSX.Element => (
  <nav>
    <Link to={PageRoutes.Home} id="title">TM</Link>
    <div id="menu-container">
      <Link to={PageRoutes.About}>About</Link>
      <Link to={PageRoutes.Projects}>Projects</Link>
      <Link to={PageRoutes.Contact}>Contact</Link>
    </div>
  </nav>
);

export default NavBar;
