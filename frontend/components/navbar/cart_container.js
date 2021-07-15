import { connect } from 'react-redux';
import Cart from './cart';
import { fetchCart } from '../../actions/cart_actions';

const mapState = ({entities, session}) => ({
  currentUser: entities.users[session.id],
  cartItems: Object.values(entities.cartItems)
});

const mapDispatch = dispatch => ({
  fetchCart: () => dispatch(fetchCart())
})

export default connect(mapState, mapDispatch)(Cart);
