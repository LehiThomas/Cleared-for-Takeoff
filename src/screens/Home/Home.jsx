import React, { Component } from "react";
import "./Home.css";

import ListItem from "../../components/ListItem";

class Home extends Component {
  render() {
    return (
      <div className="list">
        <ListItem itemText="Weight and Balance" route="/weightbalance" />
        <ListItem itemText="Weather" route="/weather" />
        <ListItem itemText="Airport Information" route="/airport" />
      </div>
    );
  }
}

export default Home;
