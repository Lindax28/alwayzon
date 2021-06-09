import * as APIUtil from '../util/cart_api_util';

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEM";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";

export const receiveCartItems = cartItems => ({
  type: RECEIVE_CART_ITEMS,
  cartItems
});

export const deleteCartItem = cartItem => ({
  type: DELETE_CART_ITEM,
  cartItem
});

export const fetchCart = () => dispatch => {
  APIUtil.getCart().then(cartItems => receiveCartItems(cartItems))
}