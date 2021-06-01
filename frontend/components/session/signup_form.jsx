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
    if (this.state.password === this.state.confirmPassword) this.props.signup(user);
  }

  renderErrors() {
    return(
      <ul className="session-error-list">
        {this.props.errors.map((error,idx) => <li className="session-error" key={`error-${idx}`}>{error}</li>)}
        <li className="session-error" key="error-confirm">{ this.state.password === this.state.confirmPassword ? "" : "Passwords do not match"}</li>
      </ul>
    )
  }

  render() {
    return(
      <main className="login-form">
        <h1>Create account</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Email
            <input type="text" value={this.state.email} onChange={this.handleInput("email")} className="login-input"/>
          </label>
          <label>Password
            <input type="password" value={this.state.password} onChange={this.handleInput("password")} className="login-input"/>
          </label>
          {this.renderErrors()}
          <button type="submit" className="login-button">Sign-In</button>
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