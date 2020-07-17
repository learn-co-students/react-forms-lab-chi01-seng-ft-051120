import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      charLeft: 280,
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
      charLeft: 280 - event.target.value.length,
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <p>Remaning characters: {this.state.charLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
