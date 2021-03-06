import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';
export const RECEIVE_LOGIN_ERRORS = 'RECEIVE_LOGIN_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSignupErrors = errors => ({
  type: RECEIVE_SIGNUP_ERRORS,
  errors
});

export const receiveLoginErrors = errors => ({
  type: RECEIVE_LOGIN_ERRORS,
  errors
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const signup = user => dispatch => {
  APIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)), error => dispatch(receiveSignupErrors(error.responseJSON)))
};

export const login = user => dispatch => {
  APIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)), error => dispatch(receiveLoginErrors(error.responseJSON)))
};

export const logout = () => dispatch => {
  APIUtil.logout().then(user => dispatch(logoutCurrentUser()))
};


