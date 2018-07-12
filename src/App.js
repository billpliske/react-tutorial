import React, { Component } from "react";
import nancy from "./images/nancy.jpg";
import liz from "./images/liz.jpg";
import yvette from "./images/yvette.jpg";
import bill from "./images/bill.jpg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header name="" />
        <div className="inner-wrapper">
          <h1 className="title">it's the fed team!</h1>
          <p className="intro">
            There might only be four of us, but when we hit you upside the head
            with our mad skills, you'll think otherwise.
          </p>

          <div className="mug-wrapper">
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
    );
  }
}

export default App;
