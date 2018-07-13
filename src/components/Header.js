import React from "react";
import "../App.css";
import { Smile } from "styled-icons/fa-regular/Smile";

const Header = props => {
  return (
    <div className={`header ${props.name}`}>
      <Smile className="smile" />
      <p className="header-text">Welcome {props.name}</p>
      <button className="add-button" onClick={props.handleClick}>
        Add
      </button>
    </div>
  );
};

export default Header;
