import React from 'react';
import { Link } from 'react-router-dom';
import { CgShoppingCart } from 'react-icons/cg';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchCart().then(()=>this.setState({ loaded: true }))
    }
  }

  render() {
    // Calculate total number of items in cart
    let cartCount = this.props.cartItems.map(item => item.quantity);
    cartCount = cartCount.reduce((a,b) => a + b, 0);
    
    // If user is logged in, navigate to cart
    const loggedIn = () => (
      <Link to="/cart" className="cart bold">
        <CgShoppingCart className="cart-icon"/>
        <span>&nbsp;Cart</span>
        <div className="cart-count">{cartCount}</div>
      </Link>
    );
    
    // If user is logged out, navigate to login
    const loggedOut = () => (
      <Link to="/login" className="cart bold">
        <CgShoppingCart className="cart-icon" />
        <span>&nbsp;Cart</span>
      </Link>
    );
    
    if (!this.state.loaded) {
      return loggedOut();
    } else {
        return(
          this.props.currentUser ? loggedIn() : loggedOut()
        )
    }
  }
}


export default Cart;