import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      charactersLeft: this.props.maxChars
    };
  }

  handleChange = (event) => {
    this.updateCharactersLeft()
    this.setState({
      value: event.target.value
    });
  }

  updateCharactersLeft = () => {
    this.setState((prevState) => {
      return {charactersLeft: prevState.charactersLeft - 1};
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} maxLength={this.props.maxChars} onChange={this.handleChange}
        />
        <small>{this.state.charactersLeft}</small>
      </div>
    );
  }
}

export default TwitterMessage;
