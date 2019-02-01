import React, { Component } from "react";
class TotalAmmount extends Component {
  remainingAmount = (original, cut) => {
    return (original - cut).toFixed(2);
  };
  componentDidMount() {}
  render() {
    const { originalAmount, freshbooksCut } = this.props;

    return (
      <div className="total-amount">
        <p className="total-amount__received">
          You will get{" "}
          <span className="amount">
            ${this.remainingAmount(originalAmount, freshbooksCut)}
          </span>{" "}
          after Freshbooks' fees.
        </p>
        <p className="total-amount__freshbooks">
          Freshbooks will take{" "}
          <span className="amount-fee">${freshbooksCut} </span> for providing a
          rad payment experience.
        </p>
      </div>
    );
  }
}

export default TotalAmmount;
