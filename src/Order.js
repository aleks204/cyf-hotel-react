import React, { Component } from "react";
import RestaurantBtn from "./RestaurantBtn.js";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = { orders: 0 };
  }
  addOrder = () => {
    console.log("Add order");
    this.setState((state) => ({
      orders: state.orders + 1
    }));
  };

  render() {
    return (
      <li>
        {this.props.orderType}
        {this.state.orders} <RestaurantBtn add={this.addOrder} />
      </li>
    );
  }
}

export default Order;
