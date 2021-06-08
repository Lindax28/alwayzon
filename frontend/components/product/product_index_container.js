import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { withRouter } from 'react-router-dom';
import { clearProducts, fetchProducts } from '../../actions/product_actions';

const mapState = ({entities}) => ({
  products: Object.values(entities.products)
  
});
const mapDispatch = dispatch => ({
  clearProducts: () => dispatch(clearProducts()),
  fetchProducts: (select, category) => dispatch(fetchProducts(select, category))
});

export default withRouter(connect(mapState, mapDispatch)(ProductIndex));