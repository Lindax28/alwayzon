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
      <main className="login-form">
        <h1>Sign-In</h1>
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
          <p>New to Alwayzon?</p>
          <Link to="/signup">Create your Alwayzon account</Link>
        </div>
      </main>
    );
  }
}

export default LoginForm;