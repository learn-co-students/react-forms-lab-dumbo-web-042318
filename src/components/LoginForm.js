import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const username = this.state.username, password = this.state.password
    
    if (username != '' && password != '') {
      const input = {username: username, password: password}
      this.props.onSubmit(input)
    }
    event.preventDefault();
  }

  handleChange(event) {
    const name = event.target.id.slice(5);
    const value = event.target.value;
    console.log(name, value); 

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handleChange} />
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
