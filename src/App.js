import React from 'react';
import './App.css';
import History from './history.js';
import { Route } from 'react-router';
import { Router } from 'react-router';
import { Switch } from 'react-router';
import { Provider } from 'react-redux';
import store from './store.js';
import routes from './routes/index.js';

export default class X extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Router history={History}>
            <Switch>
              {
                routes.map((route, key) => {
                  return (
                    <Route
                      key={key}
                      exact
                      path={route.path}
                      component={route.component}
                    />
                  );
                })
              }
            </Switch>
          </Router>
        </Provider>
      </>
    );
  }
};
