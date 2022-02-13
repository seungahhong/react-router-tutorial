import React, { useContext, useEffect } from 'react';
import { BrowserHistory } from 'history';
import {
  Navigate,
  Route,
  Routes,
  UNSAFE_NavigationContext as NavigationContext,
} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import WithRouter from './pages/WithRouter';
import User from './pages/user/User';
import UserOutlet from './pages/user/UserOutlet';
import UserMain from './pages/user/Main';
import UserAbout from './pages/user/About';
import Optional from './pages/Optional';
import Template from './pages/Template';

function App() {
  const navigation = useContext(NavigationContext).navigator as BrowserHistory;
  useEffect(() => {
    const unlisten = navigation.listen(({ location, action }) => {
      console.log(location);
      console.log(action);
      return () => {
        unlisten();
      };
    });
  }, []);

  return (
    <Template>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/user/:id/*" element={<User />} />
        <Route path="/useroutlet/:id/*" element={<UserOutlet />}>
          <Route path="" element={<UserMain />} />
          <Route path="about" element={<UserAbout />} />
        </Route>
        <Route path="/with/:id" element={<WithRouter />} />
        <Route path="/optional/:value" element={<Optional />} />
        <Route path="/optional" element={<Optional />} />
        <Route path="/main" element={<Navigate replace to="/user/1" />} />
        <Route path="/" element={<Home />} />
        <Route path={'*'} element={<div>Not Found</div>} />
      </Routes>
    </Template>
  );
}

export default App;
