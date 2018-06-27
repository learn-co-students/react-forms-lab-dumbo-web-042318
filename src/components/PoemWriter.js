import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: ''
    };
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      content: e.target.value
    });
  }

  isNotValid(content) {
    // const periodRegex = /\n/g
    const result = content.split('\n')
    console.log(result)
    if (result.length < 3 ){
      return true
    } else if (result[0].split(' ').length < 5) {
      return true
    } else if (result[1].split(' ').length < 3) {
      return true
    } else {
      return false
    }
  }

  render() {
    const isNotValid = this.isNotValid(this.state.content);
    return (
      <div>
        <textarea onChange={this.handleChange} rows="3" cols="60" name="content" value={this.state.content}/>
        { isNotValid ?
          (<div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>) : (null)
        }
        </div>
    );
  }
}

export default PoemWriter;
