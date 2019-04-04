import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "./screens/Home";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact={true} component={Home} />
      </div>
    );
  }
}

export default App;
