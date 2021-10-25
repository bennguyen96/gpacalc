import React from 'react';
// import { Switch, Route } from 'react-dom';
import Calculator from './containers/Calculator';

function App() {
  return (
    <main>
      {/* <Switch>
        <Route exact path="/" render={() => <Calculator />} />
      </Switch> */}
      <Calculator />
    </main>
  );
}

export default App;
