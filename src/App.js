import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';

import asyncComponent from './AsyncComponent';

const Header = asyncComponent(() =>
  import('./components/layout/Header').then(module => module.default)
);
const Movies = asyncComponent(() =>
  import('./components/movies/Movies').then(module => module.default)
);
const MovieDetails = asyncComponent(() =>
  import('./components/movies/MovieDetails').then(module => module.default)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <div className="container movie-list">
              <Switch>
                <Route exact path="/" component={Movies} />
                <Route exact path="/:id" component={MovieDetails} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
