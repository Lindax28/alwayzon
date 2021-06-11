import React from 'react';
import { Link } from 'react-router-dom';

class CartIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.cartItem.id,
      user_id: this.props.cartItem.userId,
      product_id: this.props.product.id,
      quantity: this.props.cartItem.quantity
    };

    this.updateQuantity = this.updateQuantity.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.remove = this.remove.bind(this);
  }

  updateQuantity() {
    this.props.updateCartItem(this.state)
  };

  handleInput(e) {
    this.setState({quantity: e.currentTarget.value});
  };

  remove(e) {
    this.props.deleteCartItem(this.props.cartItem.id);
  };

  render() {
    const { product } = this.props;
    return(
      <li className="cart-item">
        <Link to={`/products/${this.props.product.id}`}>
          <img src={product.imageUrl} alt={product.name} />
        </Link>
        <div className="cart-product-details">
          <Link className="link-product-name" to={`/products/${this.props.product.id}`}>
            <h2>{product.name}</h2>
          </Link>
          <div className="in-stock">In Stock</div>
          <div className="gray">Eligible for FREE Shipping & FREE Returns</div>
          <div className="gray">Shipped from: Alwayzon</div>
          <div className="update-cart">
              <form onSubmit={this.updateQuantity}>
                <label>Qty:
                  <input type="number" maxLength="3" min="0" max="999" required value={this.state.quantity} onChange={this.handleInput}/>
                </label>
                <button type="submit" className="auth-button update-quantity">Update</button>
              </form>
            <a className="delete-cart-item" onClick={this.remove}>Delete</a>
          </div>
        </div>
        <h3>${parseFloat(product.price).toFixed(2)}</h3>
      </li>
    )

  }
};

export default CartIndexItem;