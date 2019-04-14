import React from "react";
import { Link } from "react-router-dom";
import "./ListItem.css";

function ListItem(props) {
  return (
    <button className="item-text">
      <Link to={props.route}>{props.itemText}</Link>
    </button>
  );
}

export default ListItem;
