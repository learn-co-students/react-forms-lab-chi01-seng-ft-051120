import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      charactersRemaining: 280
    };
  }

  characterCounter = (event) => {
      let newMessage = event.target.value
      let characterLength = event.target.value.length
      let remainingCharacters = this.props.maxChars - characterLength
      console.log(this.props.maxChars - characterLength) 
      this.setState({
        message: newMessage,
        charactersRemaining: remainingCharacters
  })
  }

  render() {
    return (
      <div>
        <strong>Your message: {this.state.message} </strong>
        <input type="text" onChange={this.characterCounter} value={this.state.message} name="message" id="message" />
        <p>Characters Remaining: {this.state.charactersRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
