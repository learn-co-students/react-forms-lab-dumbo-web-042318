import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      remainderChar: this.props.maxChars
    };
  }

  handleChange = (e) => {
    this.updateRemainderChar
    this.setState({
      value: e.target.value
    });
  }

  updateRemainderChar = ()=> {
    this.setState((prevState)=>{
     return {remainderChar: prevState.remainderChar - 1}
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value}
        maxLength={this.props.maxChars}
        onChange={this.handleChange}
      />
      <p>{this.state.remainderChar}</p>
      </div>
    );
  }
}

export default TwitterMessage;
