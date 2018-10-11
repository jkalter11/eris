import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash';
import RegistrationContainer from './user/registration_container';
import LoginContainer from './session/login_container';
import HomeContainer from './user/home_container';
import Error404 from './error404';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute path="/register" component={RegistrationContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <ProtectedRoute path="/channels/@me" component={HomeContainer}/>
      <Route component={Error404} />
    </Switch>
  </div>
);

export default App;
