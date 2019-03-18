import React, { Component } from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import { history } from './utils/helper';
import Index from './pages/index/index';
import List from './pages/list/index';


import './App.css';

function AuthRoute({ component: Component, ...rest}) {
  return (
    <Route
      {...rest}
      render={props =>
        1===2 ? (
          <Component {...props} />
        ) : (
          <div>need Auth</div>
        )
      }
    />
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history = { history }>
          <ul>
            <li>
              <Link to="/index">Public Page</Link>
            </li>
            <li>
              <Link to="/list/">Protected Page</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/index/" component={Index} />
            <AuthRoute path="/list/" component={List} />
          </Switch>
        </Router>
      </div>
    );
  }
}


export default App;
