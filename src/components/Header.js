import React from "react";
import "../App.css";

const Header = props => {
  return (
    <div className={`header ${props.name}`}>
      <p className="header-text">Welcome {props.name}</p>
      <button className="add-button" onClick={props.handleClick}>
        Add
      </button>
    </div>
  );
};

export default Header;
