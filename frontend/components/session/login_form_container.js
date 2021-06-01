import { connect } from 'react-redux';
import LoginForm from './login_form';

const mapState = ({errors}) => ({
  errors: errors.session
});

const mapDispatch = dispatch => ({
  login: (user) => dispatch(login(user))
});

export default connect(mapState, mapDispatch)(LoginForm);