import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      invalid: true
    };
  }

  handleChange = event => {
    const value = event.target.value;
    const lines = value.split('\n').map(line => line.trim());
    const words = lines.map(line => line.split(" ").length).join();

    console.log(words);
    this.setState({value: value})
    if ( words === "5,3,5" ) {
      this.setState({invalid: false})
    }
  }

  render() {
  
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange}/>
        { this.state.invalid && <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;
