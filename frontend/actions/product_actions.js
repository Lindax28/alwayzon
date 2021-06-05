import * as APIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

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

export const receiveReview = ({review, average_rating, user}) => ({
  type: RECEIVE_REVIEW,
  review,
  average_rating,
  user
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const fetchProduct = productId => dispatch => {
  APIUtil.getProduct(productId).then(payload => dispatch(receiveProduct(payload)))
};

export const fetchProducts = filters => dispatch => {
  APIUtil.getProducts(filters).then(products => dispatch(receiveProducts(products)))
};

export const postReview = review => dispatch => {
  APIUtil.saveReview(review).then(review => dispatch(receiveReview(review)), error => dispatch(receiveReviewErrors(error.responseJSON)))
};