import React, { Component } from "react";
import Order from "./Order.js";

class Restaurant extends Component {
  render() {
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <Order orderType="Pizza" />
          <Order orderType="Salad" />
        </ul>

        <button>Restaurant</button>
      </div>
    );
  }
}

export default Restaurant;
