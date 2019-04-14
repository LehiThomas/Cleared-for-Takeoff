import React, { Component } from "react";

import "./WeightTable.css";

class WeightTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0,
      arm: 0,
      moment: 0
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      this.props.updateWeightMoment(
        this.props.type,
        this.state.weight,
        this.state.weight * this.state.arm
      );
    });
  };

  render() {
    return (
      <div className="weight-table">
        <h4>{this.props.tableName}</h4>
        <table>
          <tbody>
            <tr>
              <td>Weight</td>
              <td>
                <input
                  type="number"
                  name="weight"
                  value={this.state.weight}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Arm</td>
              <td>
                <input
                  type="number"
                  value={this.state.arm}
                  name="arm"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Moment</td>
              <td>
                <span>{this.state.weight * this.state.arm}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default WeightTable;
