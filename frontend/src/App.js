import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/faq" render={() => <Home />} />
      </Switch>
    </main>
  );
}

export default App;
