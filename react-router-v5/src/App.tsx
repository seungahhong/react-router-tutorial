import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import Template from './pages/Template';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/user/User';
import Item from './pages/Item';
import WithRouter from './pages/WithRouter';
import Optional from './pages/Optional';

function App() {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen((location, action) => {
      console.log(location);
      console.log(action);
      return () => {
        unlisten();
      };
    });
  }, []);

  return (
    <Template>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/user/:id">
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
        <Redirect path="/main" to="/user/1" />
        <Route exact path="/" component={Home} />
        <Route path={'*'}>
          <div>Not Found</div>
        </Route>
      </Switch>
    </Template>
  );
}

export default App;
