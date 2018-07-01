import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.props.handleChange} id="test-username" type="text"
              name="username"
              value={this.state.username}

            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.props.handleChange} id="test-password" type="password"
              name="password"
              value={this.state.password}
            />
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
