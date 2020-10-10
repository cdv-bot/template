import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './components/Menu/Menu';
import routes from './router';

function App() {
  let showConnten = (routes, index) => {
    if (routes.length === 0) return;
    let result = routes.map((route, index) => {
      return (<Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.main}
      />)
    });
    return result;
  }
  return (
    <Router>
      <div>
        <Menu />
        <div className="container">
          <div className="row">
            <Switch>
              {showConnten(routes)}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
