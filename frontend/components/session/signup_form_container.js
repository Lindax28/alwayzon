import { connect } from 'react-redux';
import SignupForm from './signup_form';

const mapState = ({errors}) => ({
  errors: errors.session
});

const mapDispatch = dispatch => ({
  signup: (user) => dispatch(signup(user))
});

export default connect(mapState, mapDispatch)(SignupForm);