import React, { Component } from "react";

import "./Taf.css";

class Taf extends Component {
  render() {
    return (
      <div className="weather-reports">
        <h3>TAF</h3>
        <p className="raw-text">{this.props.taf.raw_text}</p>
      </div>
    );
  }
}

export default Taf;
