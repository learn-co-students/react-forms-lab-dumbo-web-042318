import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: "",
      isValidPoem: false
    };
  }

  reviewPoem(poem) {
    const poemSentences = poem.split("\n").map( (sentence) => sentence.trim() );

    if(poem && poemSentences.length === 3){

      if(poemSentences[0].split(" ").length === 5 &&
      poemSentences[1].split(" ").length === 3 &&
      poemSentences[2].split(" ").length === 5) {

        return true;

      }

    } else {

      return false;

    }

  }

  handleChange = (event) => {
    this.setState({
      poem: event.target.value,
      isValidPoem: this.reviewPoem(event.target.value)
    });
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poem}
          onChange={this.handleChange}
        />
        {this.state.isValidPoem ? null : (<div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>)}
      </div>
    );
  }
}

export default PoemWriter;
