import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';
import { selectReviewsForProduct, selectProduct } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';
import { createCartItem } from '../../actions/cart_actions';

const mapState = (state, { match }) => {
  const productId = parseInt(match.params.productId);
  const product = selectProduct(state.entities, productId);
  const reviews = selectReviewsForProduct(state.entities, product);
  return {
    product,
    reviews,
    users: state.entities.users,
    userId: state.session.id
  };
};

const mapDispatch = dispatch => ({
  fetchProduct: productId => dispatch(fetchProduct(productId)),
  createCartItem: cartItem => dispatch(createCartItem(cartItem))
});

export default withRouter(connect(mapState, mapDispatch)(ProductShow));
