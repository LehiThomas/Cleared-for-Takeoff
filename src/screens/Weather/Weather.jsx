import React, { Component } from "react";
import airportService from "../../services/AirportService";

import "./Weather.css";

import Metar from "../../components/Metar";
import Taf from "../../components/Taf";
import AirportForm from "../../components/AirportForm";

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      airports: []
    };
  }

  handleChange = event => {
    this.setState({ airportCode: event.target.value });
  };

  handleSubmit = airportCode => async event => {
    let metar = await airportService.getMETAR(airportCode);
    let taf = await airportService.getTAF(airportCode);
    event.preventDefault();
    console.log(metar.data[0]);
    console.log(taf.data[0]);
    this.setState({ metar: metar.data[0], taf: taf.data[0] });
  };

  render() {
    return (
      <div className="weather-screen">
        <AirportForm handleSubmit={this.handleSubmit} />
        {this.state.metar !== undefined && (
          <div className="weather-reports">
            <Metar metar={this.state.metar} />
            <Taf taf={this.state.taf} />
          </div>
        )}
      </div>
    );
  }
}

export default Weather;
