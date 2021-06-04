import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { login, signup, clearErrors } from '../../actions/session_actions';

const mapState = ({errors}) => ({
  errors: errors.signup
});

const mapDispatch = dispatch => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapState, mapDispatch)(SignupForm);