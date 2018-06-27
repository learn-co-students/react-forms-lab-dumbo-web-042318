import React from "react";

const isValidPoem = poem => {
  const poemLines = poem.split("\n").map(line => line.trim());
  const isRightAmountOfLines = poemLines.length === 3;
  if (poem && isRightAmountOfLines) {
    return (
      poemLines[0].split(" ").length === 5 &&
      poemLines[1].split(" ").length === 3 &&
      poemLines[2].split(" ").length === 5
    );
  } else {
    return false;
  }
};

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      textarea: '',
      isValid: true,
    };
  }
  handleFormChange = (e) =>{
    console.log(e.target.value);
    this.setState({
      textarea: e.target.value,
      isValid: isValidPoem(e.target.value),
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleFormChange} value={this.state.textarea} />
      {!this.state.isValid ? (
                  <div id="poem-validation-error" style={{ color: "red" }}>
                    This poem is not written in the right structure!
                  </div>) : null}
      </div>
    );
  }
}

export default PoemWriter;
