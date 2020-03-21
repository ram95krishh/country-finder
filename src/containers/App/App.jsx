import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from '../../components/About';
import Home from '../Home';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.stet = {};
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route component={Home} exact path="/" />
            <Route
              component={About}
              path="/about"
            />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
