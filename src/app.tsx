import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  Home,
  NotFound,
} from './scenes';

import {
  NavBar,
} from './components';

import { PageRoutes } from './constants';

const App = (): JSX.Element => (
  <Router>
    <NavBar />
    <div className="content">
      <Switch>
        <Route exact path={PageRoutes.Home} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
