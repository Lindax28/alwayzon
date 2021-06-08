import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './navbar/navbar';
import ReviewFormContainer from './review/review_form_container';
import ProductIndexContainer from './product/product_index_container';
import ProductShowContainer from './product/product_show_container';
import SplashContainer from './home/splash_container';
import { ProtectedRoute } from '../util/route_util';

class Alwayzon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/products/:productId"><ProductShowContainer /></Route>
        <ProtectedRoute exact path="/products/:productId/review" component={ReviewFormContainer} />
        <Route exact path="/products"><ProductIndexContainer /></Route>
        <Route exact path="/"><SplashContainer /></Route>
      </Switch>
    </div>
  )
  }
}

export default Alwayzon;