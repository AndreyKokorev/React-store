import React from 'react';
import { HomePage, CardPage } from '../pages';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';

import './app.scss';

const App = () => {

  return (
    <div>
      <main role="main" className="container">
        <ShopHeader numItems={5} total={210} />
        <Switch>
          <Route
            path='/'
            component={HomePage}
            exact />
          <Route
            path='/cart'
            component={CardPage} />
          <Route render={() => <div>First Page</div>} />
        </Switch>
      </main>
    </div>
  )
}
export default App;