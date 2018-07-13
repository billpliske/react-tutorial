import React, { Component } from "react";
import nancy from "./images/nancy.jpg";
import liz from "./images/liz.jpg";
import yvette from "./images/yvette.jpg";
import bill from "./images/bill.jpg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import staffArray from "./data/staff.json";
import styled from "styled-components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 4 };
  }

  addNumber = () => {
    this.setState((prevState, props) => {
      return { number: prevState.number + 1 };
    });
  };

  render() {
    return (
      <div>
        <Header name="Nancy" handleClick={this.addNumber} />
        <GradientWrapper>
          <Content>
            <Headline>it's the fed team!</Headline>
            <Intro>
              There might only be <strong>{this.state.number}</strong> of us,
              but when we hit you upside the head with our mad skills, you'll
              think otherwise.
            </Intro>

            <GridWrapper>
              <Person>
                <img src={nancy} alt="Nancy" />
                <Name>Nancy</Name>
                {staffArray.map((item, index) => (
                  <About key={index}>{item.nancy}</About>
                ))}
              </Person>

              <Person>
                <img src={liz} alt="Liz" />
                <Name>Liz</Name>
                {staffArray.map((item, index) => (
                  <About key={index}>{item.liz}</About>
                ))}
              </Person>

              <Person>
                <img src={yvette} alt="Yvette" />
                <Name>Yvette</Name>
                {staffArray.map((item, index) => (
                  <About key={index}>{item.yvette}</About>
                ))}
              </Person>

              <Person>
                <img src={bill} alt="Bill" />
                <Name>Bill</Name>
                {staffArray.map((item, index) => (
                  <About key={index}>{item.bill}</About>
                ))}
              </Person>
            </GridWrapper>
            <Footer />
          </Content>
        </GradientWrapper>
      </div>
    );
  }
}

const GradientWrapper = styled.div`
  background: linear-gradient(to bottom, #2193b0, #6dd5ed);
  height: 100vh;
  padding: 70px;
  position: relative;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const Headline = styled.h1`
  color: rgb(23, 95, 95);
  font-size: 85px;
  letter-spacing: -3px;
  margin: 0;
`;

const Intro = styled.p`
  color: white;
  color: rgb(194, 227, 238);
  font-size: 19px;
  font-weight: 100;
  margin: 0;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 50px 0;
`;

const Person = styled.div`
  img {
    border: 8px white solid;
  }
`;

const Name = styled.p`
  color: white;
  font-size: 20px;
  margin: 5px 0 0 0;
`;

const About = styled.p`
  color: rgb(26, 80, 97);
  font-style: italic;
  margin: 10px 0 60px 0;
  max-width: 260px;
`;

export default App;
