import React from 'react';
import Router from 'react-router';
import domready from 'domready';

import './global-styles';

import Main from './main.jsx';
import Toolbar from './pages/toolbar/toolbar.jsx';

const openFinReadyOrBrowser = callback => {
  if (window.fin) {
    window.fin.desktop.main(() => callback());
  } else {
    callback();
  }
};

const RouterHandler = Router.RouteHandler;
const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;

class App extends React.Component {
  render () {
    return (
      <RouterHandler  />
    );
  }
}

const routes = (
  <Route handler={App}>
    <DefaultRoute handler={Main}></DefaultRoute>
    <Route path='toolbar' handler={Toolbar}></Route>
  </Route>
);

domready(() => {
  openFinReadyOrBrowser(() => {
    Router.run(routes, Router.HistoryLocation, (Root) => {
      React.render(<Root />, document.body);
    });
  });
});
