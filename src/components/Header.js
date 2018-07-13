import React from "react";
import { Smile } from "styled-icons/fa-regular/Smile";
import styled from "styled-components";

const Header = props => {
  return (
    <Wrapper>
      <Icon />
      <Welcome>Welcome {props.name}</Welcome>
      <Button onClick={props.handleClick}>Add</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #7dc4d6;
  display: relative;
  padding: 25px 80px;
`;

const Icon = styled(Smile)`
  background-color: yellow;
  border-radius: 13px;
  color: #000000;
  margin-right: 5px;
  position: relative;
  top: 5px;
  width: 25px;
`;

const Welcome = styled.p`
  display: inline-block;
  margin: 0;
`;

const Button = styled.button`
  padding: 10px 20px;
  position: absolute;
  right: 80px;
  top: 16px;
`;

export default Header;
