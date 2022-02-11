import { Link } from 'react-router-dom';
import { PageRoutes } from '../../constants';
import FadeLoad from '../fade-load';

import './styles.scss';

const NavBar = (): JSX.Element => (
  <FadeLoad>
    <nav>
      <Link to={PageRoutes.Home} id="title">TM</Link>
      <div id="menu-container">
        <Link to={PageRoutes.About}>About</Link>
        <Link to={PageRoutes.Contact}>Contact</Link>
      </div>
    </nav>
  </FadeLoad>
);

export default NavBar;
