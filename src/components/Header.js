import React, { Component } from "react";
import "../App.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0, color: 0 };
  }

  addNumber = () => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    return (
      <div className={`header ${this.props.name}`}>
        <p className="header-text">Welcome {this.props.name}</p>
        <button className="add-button" onClick={this.addNumber}>
          Add
        </button>
        <button className="random-button">Random</button>
        <p className="number">{this.state.number}</p>
      </div>
    );
  }
}

export default Header;
