import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Template from './pages/Template';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/user/User';
import Item from './pages/Item';
import WithRouter from './pages/WithRouter';
import Optional from './pages/Optional';

function App() {
  return (
    <Template>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users/:id">
          <User />
        </Route>
        <Route path="/with/:id">
          <WithRouter />
        </Route>
        <Route
          path="/item/:id"
          render={({ match }) => <Item id={match.params.id} />}
        />
        <Route path="/optional/:value?" component={Optional} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Template>
  );
}

export default App;
