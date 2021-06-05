import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchProducts } from '../../actions/product_actions';

const mapState = ({entities}) => ({
  products: Object.values(entities.products)
});

const mapDispatch = dispatch => ({
  fetchProducts: filter => dispatch(fetchProducts(filter))
});

export default connect(mapState, mapDispatch)(ProductIndex);