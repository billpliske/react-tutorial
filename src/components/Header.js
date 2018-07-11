import React, { Component } from "react";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <p className="header-text">Welcome, ya'll.</p>
        <button className="add-button">Add</button>
        <button className="random-button">Random</button>
      </div>
    );
  }
}

export default Header;
