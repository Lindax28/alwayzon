import React from 'react';
import { Link } from 'react-router-dom';
import { CgShoppingCart } from 'react-icons/cg';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount() {
    this.props.fetchCart().then(()=>this.setState({ loaded: true }))
  }

  render() {
    if (!this.state.loaded) {
      return null;
    }
    let cartCount = this.props.cartItems.map(item=> item.quantity);
    cartCount = cartCount.reduce((a,b)=>a+b,0);
    const loggedIn = () => (
      <Link to="/cart" className="cart bold">
        <CgShoppingCart className="cart-icon"/>
        <span>&nbsp;Cart</span>
        <div className="cart-count">{cartCount}</div>
      </Link>
    );
  
    const loggedOut = () => (
      <Link to="/login" className="cart bold">
        <CgShoppingCart className="cart-icon" />
        <span>&nbsp;Cart</span>
      </Link>
    );
    return(
      this.props.currentUser ? loggedIn() : loggedOut()
    )
  }
}


export default Cart;