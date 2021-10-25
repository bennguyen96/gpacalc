import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/faq" render={() => <h1>TEST</h1>} />
      </Switch>
    </main>
  );
}

export default App;
