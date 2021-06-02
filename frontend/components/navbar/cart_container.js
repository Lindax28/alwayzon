import { connect } from 'react-redux';
import Cart from './cart';

const mapState = ({entities, session}) => ({
  currentUser: entities.users[session.id]
});

export default connect(mapState)(Cart);
