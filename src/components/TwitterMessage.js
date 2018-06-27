import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      messageInput: '',
      charsRemain: 0,
    };
  }

handleInputChange = (e) =>{
  let remain = this.props.maxChars - e.target.value.length
  this.setState({
    messageInput: e.target.value,
    charsRemain: remain
  })
}


  render() {
    return (
      <div>
        <strong>Your message:</strong>
      <input type="text" onChange={this.handleInputChange} value={this.state.messageInput} maxLength={this.props.maxChars} />
    <p>characters remaining: {this.state.charsRemain} / {this.props.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
