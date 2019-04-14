import React, { Component } from "react";
import airportService from "../../services/AirportService";

import "./AirportInfo.css";

import Airport from "../../components/Airport";
import AirportForm from "../../components/AirportForm";

class AirportInfo extends Component {
  constructor() {
    super();
    this.state = {
      airports: []
    };
  }

  handleSubmit = airportCode => async event => {
    let info = await airportService.getAirportInfo(airportCode);
    event.preventDefault();
    let allPorts = this.state.airports;
    allPorts.unshift(info);

    this.setState({ airports: allPorts });
  };

  render() {
    return (
      <div className="airport-screen">
        <AirportForm handleSubmit={this.handleSubmit} />
        {this.state.airports.map(port => {
          return <Airport key={port.icao} data={port} />;
        })}
      </div>
    );
  }
}

export default AirportInfo;
