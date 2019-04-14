import React, { Component } from "react";

import "./Metar.css";

class Metar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airportCode: "KSSF",
      airports: []
    };
  }

  setWind = () => {
    return (
      <td>
        {this.props.metar.wind.degrees}&deg; at{" "}
        {this.props.metar.wind.speed_kts}kts
        {this.props.metar.wind.gust_kts && (
          <span>, gusts {this.props.metar.wind.gust_kts} kts</span>
        )}
      </td>
    );
  };

  setClouds = () => {
    return (
      <td>
        {this.props.metar.clouds.map(layer => {
          if (layer.code === "CLR") {
            return <p key={layer.code}>{layer.text}</p>;
          } else {
            return (
              <p key={layer.base_feet_agl}>
                {layer.text} {layer.base_feet_agl}ft
              </p>
            );
          }
        })}
      </td>
    );
  };

  getRemarks = () => {
    let index = this.props.metar.raw_text.indexOf("RMK");
    let rmk = this.props.metar.raw_text.substring(index + 4);

    return <td>{rmk}</td>;
  };

  render() {
    return (
      <div className="weather-reports">
        <h2>{this.props.metar.station.name}</h2>
        <h3>METAR - Conditions: {this.props.metar.flight_category}</h3>
        <p className="raw-text">{this.props.metar.raw_text}</p>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Issued</strong>
              </td>
              <td>{this.props.metar.observed}</td>
            </tr>
            <tr>
              <td>
                <strong>Wind</strong>
              </td>
              {this.setWind()}
            </tr>
            <tr>
              <td>
                <strong>Clouds</strong>
              </td>
              {this.setClouds()}
            </tr>
            <tr>
              <td>
                <strong>Visibility</strong>
              </td>
              <td>{this.props.metar.visibility.miles} miles</td>
            </tr>
            <tr>
              <td>
                <strong>Temperature</strong>
              </td>
              <td>
                {this.props.metar.temperature.celsius}&deg;C, dewpoint{" "}
                {this.props.metar.dewpoint.celsius}&deg;
              </td>
            </tr>
            <tr>
              <td>
                <strong>Humidity</strong>
              </td>
              <td>{this.props.metar.humidity.percent}%</td>
            </tr>
            <tr>
              <td>
                <strong>Altimeter Setting</strong>
              </td>
              <td>{this.props.metar.barometer.hg} inHg</td>
            </tr>
            <tr>
              <td>
                <strong>Remarks</strong>
              </td>
              {this.getRemarks()}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Metar;
