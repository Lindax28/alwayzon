import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS, RECEIVE_REVIEW, CLEAR_PRODUCTS } from '../actions/product_actions';

const productsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, {[action.product.id]: action.product});
    case RECEIVE_PRODUCTS:
      return action.products;
    case RECEIVE_REVIEW:
      const { review, average_rating } = action;
      const newState = Object.assign({}, state);
      newState[review.product_id].reviewIds.push(review.id);
      newState[review.product_id].average_rating = average_rating;
      return newState;
    case CLEAR_PRODUCTS:
      return {};
    default:
      return state;
  }
}

export default productsReducer;