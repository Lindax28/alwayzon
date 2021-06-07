import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Searchbar from './searchbar';
import { fetchProducts } from '../../actions/product_actions';

const mapDispatch = dispatch => ({
  fetchProducts: search => dispatch(fetchProducts(search))
});

export default withRouter(connect(null, mapDispatch)(Searchbar));
