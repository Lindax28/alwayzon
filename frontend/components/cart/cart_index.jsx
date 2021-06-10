import React from 'react';
import CartIndexItem from './cart_index_item';

class CartIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCart();
  };

  render() {
    console.log(this.props)
    let cartItems = this.props.cartItems.map((cartItem, idx) => <CartIndexItem key={`cartItem-${idx}`} cartItem={cartItem} product={this.props.products[cartItem.productId]} fetchCart = {this.props.fetchCart} deleteCartItem={this.props.deleteCartItem} updateCartItem={this.props.updateCartItem}/>)
    let total = Object.values(this.props.products);
    total = total.map(product => parseFloat(product.price));
    total = total.reduce((a,b) => a + b, 0).toFixed(2);
    return(
      <div className="shopping-cart">
        <ul className="cart-index">
          <h1>Shopping Cart</h1>
          <h3>Price</h3>
          { cartItems.length === 0 ? <li className="empty-cart"><h1>Your Alwayzon cart is empty.</h1> Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more.</li> : cartItems }
          <h2 className="subtotal">Subtotal ({cartItems.length} items): <span className="bold">${total}</span></h2>
        </ul>
        <section className="cart-total">
          <h2>Subtotal({cartItems.length} items): ${total}</h2>
          <label>This order contains a gift
            <input type="checkbox" />
          </label>
          <button type="button">Proceed to checkout</button>
        </section>
      </div>
    )
  }
}

export default CartIndex;