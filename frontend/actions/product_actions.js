import * as APIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const CLEAR_PRODUCTS = 'CLEAR_PRODUCTS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveProduct = ({product, reviews, users}) => ({
  type: RECEIVE_PRODUCT,
  product,
  reviews,
  users
});

export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const clearProducts = () => ({
  type: CLEAR_PRODUCTS
});

export const receiveReview = ({review, averageRating, user}) => ({
  type: RECEIVE_REVIEW,
  review,
  averageRating,
  user
});

export const fetchProduct = productId => dispatch => {
  APIUtil.getProduct(productId).then(payload => dispatch(receiveProduct(payload)))
};

export const fetchProducts = search => dispatch => {
  APIUtil.getProducts(search).then(products => dispatch(receiveProducts(products)))
};

export const postReview = review => dispatch => {
  APIUtil.saveReview(review).then(review => dispatch(receiveReview(review)))
};
