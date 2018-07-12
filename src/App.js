import React, { Component } from "react";
import nancy from "./images/nancy.jpg";
import liz from "./images/liz.jpg";
import yvette from "./images/yvette.jpg";
import bill from "./images/bill.jpg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 4 };
  }

  addNumber = () => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    return (
      <div className="wrapper">
        <Header name="" handleClick={this.addNumber} />
        <div className="gradient-wrapper">
          <div className="content-wrapper">
            <h1 className="title">it's the fed team!</h1>
            <p className="intro">
              There might only be <strong>{this.state.number}</strong> of us,
              but when we hit you upside the head with our mad skills, you'll
              think otherwise.
            </p>

            <div className="grid-wrapper">
              <div className="person">
                <img src={nancy} alt="Nancy" />
                <p className="name">Nancy</p>
              </div>

              <div className="person">
                <img src={liz} alt="Liz" />
                <p className="name">Liz</p>
              </div>

              <div className="person">
                <img src={yvette} alt="Yvette" />
                <p className="name">Yvette</p>
              </div>

              <div className="person">
                <img src={bill} alt="Bill" />
                <p className="name">Bill</p>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
