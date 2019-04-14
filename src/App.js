import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "./screens/Home";
import WeightAndBalance from "./screens/WeightAndBalance";
import Weather from "./screens/Weather";
import AirportInfo from "./screens/AirportInfo";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact={true} component={Home} />
        <Route path="/weightbalance" component={WeightAndBalance} />
        <Route path="/weather" component={Weather} />
        <Route path="/airport" component={AirportInfo} />
      </div>
    );
  }
}

export default App;
