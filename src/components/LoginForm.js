import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    // onSubmit prop. function

    this.state = {
      username: '',
      password: '',
      textarea: '',
    };
  }

  handleFormChange = (e) =>{
    if(e.target.id === "test-username"){
      // console.log(e.target.value);
      this.setState({
        username: e.target.value
      })
    }else if(e.target.id === "test-password"){
      // console.log(e.target.value);
      this.setState({
        password: e.target.value
      })
    }
  }

  handleFormSubmit = (e) =>{
    e.preventDefault()
    const{username , password} = this.state
    if(username !== '' && password !== ''){
      this.props.onSubmit({username, password})
    }else{
      console.log('no good ace');
    }

  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.handleFormChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.handleFormChange} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
