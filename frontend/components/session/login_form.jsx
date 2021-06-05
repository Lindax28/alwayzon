import React from 'react';
import { Link } from 'react-router-dom';
import { LightLogo } from '../navbar/logo';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleInput(type) {
    return e => {
      this.setState({[type]: e.currentTarget.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  loginDemo() {
    this.setState({email: "demo-user@email.com", password: "password"})
    const demo = {email: "demo-user@email.com", password: "password"}
    this.props.login(demo);
  }

  renderErrors() {
    return(
      <ul className="session-error-list">
        {this.props.errors.map((error,idx) => <li className="session-error" key={`error-${idx}`}>{error}</li>)}
      </ul>
    )
  }

  render() {
    return(
      <main className="auth-page">
        <LightLogo />
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <h1>Sign-In</h1>
          <label>Email<br></br>
            <input type="text" value={this.state.email} onChange={this.handleInput("email")} className="login-input"/>
          </label>
          <label>Password<br></br>
            <input type="password" value={this.state.password} onChange={this.handleInput("password")} className="login-input"/>
          </label>
          <div className="auth-errors">{this.renderErrors()}</div>
          <button type="submit" className="auth-button submit-button glow-on-click">Sign-In</button>
          <button type="button" onClick={this.loginDemo} className="submit-button demo-button demo-glow-on-click">Sign-In as demo user</button>
          <p id="auth-conditions">By continuing, you agree to Alwayzon's Conditions of Use and Privacy Notice.</p>
        </form>

        <div className="login-to-signup">
          <h3><span>New to Alwayzon?</span></h3>
          <Link to="/signup">
            <button type="button" className="redirect-signup glow-on-click">Create your Alwayzon account</button>
          </Link>
        </div>
      </main>
    );
  }
}

export default LoginForm;