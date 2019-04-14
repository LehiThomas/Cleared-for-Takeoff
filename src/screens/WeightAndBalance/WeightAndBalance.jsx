import React, { Component } from "react";

import "./WeightAndBalance.css";

import WeightTable from "../../components/WeightTable";

class WeightAndBalance extends Component {
  constructor() {
    super();
    this.state = {
      totalWeight: 0,
      totalMoment: 0,
      balance: 0,
      weight: {
        empty: 0,
        fuel: 0,
        pilot: 0,
        pass: 0,
        rear1: 0,
        rear2: 0,
        baggage: 0
      },
      moment: {
        empty: 0,
        fuel: 0,
        pilot: 0,
        pass: 0,
        rear1: 0,
        rear2: 0,
        baggage: 0
      }
    };
  }

  updateWeightMoment = (type, childWeight, childMoment) => {
    let weight = { ...this.state.weight };
    let moment = { ...this.state.moment };

    weight[type] = Number(childWeight);
    moment[type] = Number(childMoment);

    this.setState({ weight, moment }, console.log(this.state));
  };

  calculateBalance = () => {
    let totalWeight = Object.values(this.state.weight).reduce(
      (acc, itemWeight) => acc + itemWeight
    );
    let totalMoment = Object.values(this.state.moment).reduce(
      (acc, itemMoment) => acc + itemMoment
    );
    let balance = totalMoment / totalWeight;

    this.setState({ totalWeight, totalMoment, balance });
  };

  render() {
    return (
      <div className="weight-and-balance">
        <WeightTable
          tableName="Empty Aircraft"
          type="empty"
          updateWeightMoment={this.updateWeightMoment}
        />
        <WeightTable
          tableName="Fuel"
          type="fuel"
          updateWeightMoment={this.updateWeightMoment}
        />
        <WeightTable
          tableName="Pilot"
          type="pilot"
          updateWeightMoment={this.updateWeightMoment}
        />
        <WeightTable
          tableName="Front Passenger"
          type="pass"
          updateWeightMoment={this.updateWeightMoment}
        />
        <WeightTable
          tableName="Rear Passenger"
          type="rear1"
          updateWeightMoment={this.updateWeightMoment}
        />
        <WeightTable
          tableName="Rear Passenger"
          type="rear2"
          updateWeightMoment={this.updateWeightMoment}
        />
        <WeightTable
          tableName="Baggage"
          type="baggage"
          updateWeightMoment={this.updateWeightMoment}
        />
        <button className="weightButton" onClick={this.calculateBalance}>
          Calculate Weight and Balance
        </button>
        <div className="results">
          <p>Total Weight: {this.state.totalWeight}</p>
          <p>Total Moment: {this.state.totalMoment}</p>
          <p>Balance: {this.state.balance}</p>
        </div>
      </div>
    );
  }
}

export default WeightAndBalance;
