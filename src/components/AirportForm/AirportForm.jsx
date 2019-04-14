import React, { Component } from "react";

import "./AirportForm.css";

class AirportForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      airportCode: ""
    };
  }

  handleChange = event => {
    this.setState({ airportCode: event.target.value });
  };

  render() {
    return (
      <form
        className="airport-code-form"
        onSubmit={this.props.handleSubmit(this.state.airportCode)}
      >
        <label>
          Airport Code:{" "}
          <input
            className="airport-input"
            type="text"
            value={this.state.airportCode}
            onChange={this.handleChange}
            maxLength="4"
          />
        </label>
        <input className="submit-button" type="submit" value="Submit" />
      </form>
    );
  }
}

export default AirportForm;
