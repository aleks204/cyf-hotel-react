import React from "react";
import Clock from "./Clock";

const Heading = () => {
  return (
    <header className="App-header">
      <img
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        className="App-logo small"
        alt="logo"
      />
      <div>
        <Clock />
      </div>
    </header>
  );
};

export default Heading;
