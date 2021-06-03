import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
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

  renderErrors() {
    return(
      <ul className="session-error-list">
        {this.props.errors.map((error,idx) => <li className="session-error" key={`error-${idx}`}>{error}</li>)}
      </ul>
    )
  }

  render() {
    return(
      <main className="login-page">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h1>Sign-In</h1>
          <label>Email<br></br>
            <input type="text" value={this.state.email} onChange={this.handleInput("email")} className="login-input"/>
          </label>
          <label>Password<br></br>
            <input type="password" value={this.state.password} onChange={this.handleInput("password")} className="login-input"/>
          </label>
          <p className="login-errors">{this.renderErrors()}</p>
          <button type="submit" className="login-button login-submit">Sign-In</button>
        </form>

        <div className="login-to-signup">
          <h3><span>New to Alwayzon?</span></h3>
          <Link to="/signup">
            <button type="button" className="redirect-signup">Create your Alwayzon account</button>
          </Link>
        </div>
      </main>
    );
  }
}

export default LoginForm;