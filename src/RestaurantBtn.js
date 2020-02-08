import React from "react";

const RestaurantBtn = (props) => {
  return (
    <button className="btn btn-primary" onClick={props.add}>
      Add
    </button>
  );
};

export default RestaurantBtn;
