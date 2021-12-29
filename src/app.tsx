import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  About,
  Contact,
  Home,
  NotFound,
  Projects,
} from './routes';

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
        <Route exact path={PageRoutes.About} component={About} />
        <Route exact path={PageRoutes.Projects} component={Projects} />
        <Route exact path={PageRoutes.Contact} component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
