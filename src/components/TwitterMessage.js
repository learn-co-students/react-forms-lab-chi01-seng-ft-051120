import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super()
    this.state = {
      message: "",
      charactersRemaining: 280
    }
  }

  charCounter = (event) => {
    let newMessage = event.target.value
    this.setState({
      message: newMessage,
      charactersRemaining: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message: {this.state.message} </strong>
        <input type="text" onChange={this.charCounter} value={this.state.message} name="message" id="message" />
        <p>Characters Remaining: {this.state.charactersRemaining}</p>
      </div>)
  }

}

export default TwitterMessage;
