import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS, RECEIVE_REVIEW, CLEAR_PRODUCTS } from '../actions/product_actions';
import { RECEIVE_CART_ITEMS } from '../actions/cart_actions';

const productsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, {[action.product.id]: action.product});
    case RECEIVE_PRODUCTS:
      return action.products;
    case RECEIVE_REVIEW:
      const { review, averageRating } = action;
      const newState = Object.assign({}, state);
      newState[review.productId].reviewIds.push(review.id);
      newState[review.productId].averageRating = averageRating;
      return newState;
    case RECEIVE_CART_ITEMS:
      return Object.assign({}, action.products);
    case CLEAR_PRODUCTS:
      return {};
    default:
      return state;
  }
}

export default productsReducer;