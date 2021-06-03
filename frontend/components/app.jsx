import React from "react";
import { Switch, Route } from 'react-router-dom';
import Navbar from './navbar/navbar';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>

    <Switch>
      <Route path="/login"><AuthRoute path="/login" component={LoginFormContainer} /></Route>
      <Route path="/signup"><AuthRoute path="/signup" component={SignupFormContainer} /></Route>
      <Route path="/*"><Navbar /></Route>
    </Switch>
  </div>
);

export default App;

