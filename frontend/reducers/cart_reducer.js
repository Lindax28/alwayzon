import { RECEIVE_CART_ITEMS, DELETE_CART_ITEM } from '../actions/cart_actions';

const cartReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CART_ITEMS:
      return Object.assign(newState, action.cartItems);
    case DELETE_CART_ITEM:
      delete newState[action.cartItem.id]
      return newState;
    default:
      return state;
  }
}
 
export default cartReducer;
