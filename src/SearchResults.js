import React, { Component } from "react";
import moment from "moment";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { isSelected: false, selectedRow: null };
  }
  tick = (id) => {
    this.setState((state) => ({
      isSelected: true,
      selectedRow: id
    }));
  };

  render() {
    console.log(this.state);
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Check in date</th>
            <th>Check out date</th>
            <th>Day's Q-ty</th>
          </tr>
        </thead>
        <tbody>
          {this.props.results.map((result) => {
            const checkInDate = moment(result.checkInDate);
            const checkOutDate = moment(result.checkOutDate);
            const dayCalculation = checkOutDate.diff(checkInDate, "days");
            return (
              <tr
                onClick={() => this.tick(result.id)}
                key={result.id}
                className={
                  this.state.isSelected === true && this.state.selectedRow === result.id
                    ? "selected"
                    : ""
                }>
                <td>{result.id}</td>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>{dayCalculation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
export default SearchResults;
