import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleLogin = event => {
    event.preventDefault()
    if (this.state.username && this.state.password){
      this.props.handleLogin(this.state) 
    }
  }

  handleUsernameChange = event => {
    this.setState({username: event.target.value})
  }
  handlePasswordChange = event => {
    this.setState({password: event.target.value})
  }

  render() {
    return (
      <form onSubmit={event => this.handleLogin(event)}>
        <div>
          <label>
            Username
            <input onChange={event => this.handleUsernameChange(event)} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={event => this.handlePasswordChange(event)} id="password" name="password" type="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
