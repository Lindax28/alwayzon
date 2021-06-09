import { connect } from 'react-redux';
import CategoryNavbar from './category_navbar';
import { fetchProducts } from '../../actions/product_actions';


const mapDispatch = dispatch => ({
  fetchProducts: (search, category) => dispatch(fetchProducts(search, category))
});

export default connect(null, mapDispatch)(CategoryNavbar);
