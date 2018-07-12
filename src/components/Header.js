import React, { Component } from "react";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <div className={`header ${this.props.name}`}>
        <p className="header-text">Welcome {this.props.name}</p>
      </div>
    );
  }
}

export default Header;
