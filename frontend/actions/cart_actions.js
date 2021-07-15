import * as APIUtil from '../util/cart_api_util';

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";

export const receiveCartItems = ({ cartItems, products }) => ({
  type: RECEIVE_CART_ITEMS,
  cartItems,
  products
});

export const dropCartItem = cartItem => ({
  type: DELETE_CART_ITEM,
  cartItem
});

export const fetchCart = () => dispatch => (
  APIUtil.getCart().then(payload => dispatch(receiveCartItems(payload)))
);

export const deleteCartItem = cartId => dispatch => (
  APIUtil.removeCartItem(cartId).then(cartItem => dispatch(dropCartItem(cartItem)))
);

export const createCartItem = cartItem => dispatch => (
  APIUtil.addCartItem(cartItem).then(payload => dispatch(receiveCartItems(payload)))
);

export const updateCartItem = cartItem => dispatch => (
  APIUtil.updateQuantity(cartItem).then(payload => dispatch(receiveCartItems(payload)))
);
