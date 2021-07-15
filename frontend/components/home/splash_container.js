import { connect } from 'react-redux';
import Splash from './splash';
import { fetchProducts } from '../../actions/product_actions';

const mapDispatch = dispatch => ({
  fetchProducts: (search, category) => dispatch(fetchProducts(search, category))
});

export default connect(null, mapDispatch)(Splash);
