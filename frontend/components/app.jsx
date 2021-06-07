import React from "react";
import { Switch, Route } from 'react-router-dom';
import Navbar from './navbar/navbar';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ReviewFormContainer from './review/review_form_container';
import ProductIndexContainer from './product/product_index_container';
import ProductShowContainer from './product/product_show_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <Route path="/login"><AuthRoute path="/login" component={LoginFormContainer} /></Route>
      <Route path="/signup"><AuthRoute path="/signup" component={SignupFormContainer} /></Route>
      <Route path="/*"><Navbar /></Route>
    </Switch>
    <Route exact path="/products/:productId"><ProductShowContainer /></Route>
    <Route exact path="/products/:productId/review"><ReviewFormContainer /></Route>
    <Route exact path="/products"><ProductIndexContainer /></Route>
    {/* <Route path="/products/review"><ReviewFormContainer /></Route> */}
  </div>
);

export default App;

