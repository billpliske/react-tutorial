import React, { Component } from "react";
import styled from "styled-components";

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <p>Copyright 2018, from the Front End Design team.</p>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  color: rgb(20, 92, 92);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 6px;
  text-transform: uppercase;
`;

export default Footer;
