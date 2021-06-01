import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.passwordMatch = this.passwordMatch.bind(this);
  }

  handleInput(type) {
    return e => {
      this.setState({[type]: e.currentTarget.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }
    this.props.signup(user);
  }

  passwordMatch() {
    return this.state.password === this.state.confirmPassword
  }

  renderErrors() {
    return(
      <ul className="session-error-list">
        {this.props.errors.map((error,idx) => <li className="session-error" key={`error-${idx}`}>{error}</li>)}
        {this.passwordMatch() ? "" : <li className="session-error" key="error-confirm">Passwords do not match</li>}
      </ul>
    )
  }

  render() {
    return(
      <main className="login-form">
        <h1>Create account</h1>
        <form onSubmit={this.handleSubmit}>
          <label>First name
            <input type="text" value={this.state.firstName} onChange={this.handleInput("firstName")} className="signup-input"/>
          </label>
          <label>Last name
            <input type="text" value={this.state.lastName} onChange={this.handleInput("lastName")} className="signup-input"/>
          </label>
          <label>Email
            <input type="text" value={this.state.email} onChange={this.handleInput("email")} className="signup-input"/>
          </label>
          <label>Password
            <input type="password" value={this.state.password} onChange={this.handleInput("password")} className="signup-input"/>
          </label>
          <label>Re-enter password
            <input type="password" value={this.state.confirmPassword} onChange={this.handleInput("confirmPassword")} className="signup-input"/>
          </label>
          { this.renderErrors() }
          <button type="submit" className="signup-button">Create your Alwayzon account</button>
        </form>

        <div>
          <p>Already have an account?</p>
          <Link to="/login">Sign-In</Link>
        </div>
      </main>
    );
  }
}

export default SignupForm;