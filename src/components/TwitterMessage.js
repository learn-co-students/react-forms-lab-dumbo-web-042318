import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    
    this.state = {
      value: "",
      charsLeft: props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      charsLeft: this.state.charsLeft - 1
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div>
          Remaining characters: {this.state.charsLeft}
        </div>
      </div>
    );
  }
}

export default TwitterMessage;
