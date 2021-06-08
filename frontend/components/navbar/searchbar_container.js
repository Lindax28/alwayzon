import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Searchbar from './searchbar';
import { fetchProducts } from '../../actions/product_actions';

const mapDispatch = dispatch => ({
  fetchProducts: (search, category) => dispatch(fetchProducts(search, category))
});

export default withRouter(connect(null, mapDispatch)(Searchbar));
