import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { clearProducts } from '../../actions/product_actions';

const mapState = ({entities}) => ({
  products: Object.values(entities.products)
});

const mapDispatch = dispatch => ({
  clearProducts: () => dispatch(clearProducts())
});

export default connect(mapState, mapDispatch)(ProductIndex);