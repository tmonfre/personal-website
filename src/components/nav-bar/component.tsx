import { Link } from 'react-router-dom';
import { PageRoutes } from '../../constants';

import './styles.scss';

import menuImg from './menu.png';

const NavBar = (): JSX.Element => {
  function handleMenuButtonClick() {
    console.log('open menu');
  }

  return (
    <nav>
      <Link to={PageRoutes.Home}>Example Webapp</Link>
      <button type="button" onClick={handleMenuButtonClick}>
        <img src={menuImg} id="menu-button" alt="menu button" />
      </button>
    </nav>
  );
};

export default NavBar;
