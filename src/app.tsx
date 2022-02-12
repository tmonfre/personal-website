import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  About,
  Cancer,
  Contact,
  Home,
  NotFound,
  Projects,
  ZoomCLI,
} from './routes';

import {
  Nav,
  Footer,
  ScrollToTop,
} from './components';

import { PageRoutes } from './constants';

import './styles.scss';

const App = (): JSX.Element => (
  <Router>
    <Nav />
    <div className="content">
      <Switch>
        <Route exact path={PageRoutes.Home} component={Home} />
        <Route exact path={PageRoutes.About} component={About} />
        <Route exact path={PageRoutes.Projects} component={Projects} />
        <Route exact path={PageRoutes.Contact} component={Contact} />
        <Route exact path={PageRoutes.Cancer} component={Cancer} />
        <Route exact path={PageRoutes.Zoom} component={ZoomCLI} />
        <Route component={NotFound} />
      </Switch>
    </div>
    <Footer />
    <ScrollToTop />
  </Router>
);

export default App;
