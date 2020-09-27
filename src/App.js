import React from 'react';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from './router';

function App() {
  const showRoutes = (routes) => {
    if (routes.length > 0) {
      let resuls = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      });
      return resuls;
    }
  }

  return (
    <Router>
      {/* menu */}
      <Menu />
      {/* route */}
      <div>
        <Switch>
          {
            showRoutes(routes)
          }
        </Switch>
      </div>
    </Router>
  );
}

export default App;
