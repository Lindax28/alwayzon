import { connect } from 'react-redux';
import CartIndex from './cart_index';
import { fetchCart, deleteCartItem, updateCartItem } from '../../actions/cart_actions';

const mapState = ({entities}) => ({
  cartItems: Object.values(entities.cartItems),
  products: entities.products
});

const mapDispatch = dispatch => ({
  fetchCart: () => dispatch(fetchCart()),
  deleteCartItem: cartId => dispatch(deleteCartItem(cartId)),
  updateCartItem: cartItem => dispatch(updateCartItem(cartItem))
});

export default connect(mapState, mapDispatch)(CartIndex);