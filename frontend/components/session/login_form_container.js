import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, clearErrors } from '../../actions/session_actions';

const mapState = ({errors}) => ({
  errors: errors.login
});

const mapDispatch = dispatch => ({
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapState, mapDispatch)(LoginForm);