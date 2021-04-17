import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import create from './redux/create';
import { history } from './redux/create';
import "./style/base.scss";

const store = create();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/cart" component={CartPage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </ConnectedRouter>
      </BrowserRouter>
    </Provider>
  );
}

export default App;