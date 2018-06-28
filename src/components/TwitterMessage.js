import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      remainingChars: this.props.maxChars
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    const chars = event.target.value;
    
    this.setState({
      value: chars,
      remainingChars: (this.state.remainingChars - chars.length)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button disabled="disabled">{this.state.remainingChars}</button>
      </div>
    );
  }
}

export default TwitterMessage;