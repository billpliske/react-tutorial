import React, { Component } from "react";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <div className={`header ${this.props.name}`}>
        <p className="header-text">Welcome {this.props.name}</p>
        <button className="add-button">Add</button>
        <button className="random-button">Random</button>
      </div>
    );
  }
}

export default Header;
