import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input  onChange={this.handleChange}
              id="test-username"
              type="text"
              name="username"
              value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleChange}
              id="test-password"
              type="password"
              name="password"
              value={this.state.password} />
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
