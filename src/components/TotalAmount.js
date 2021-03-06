import React, { Component } from "react";
import PropTypes from "prop-types";
import { numberWithCommas } from "../utils/functions";
class TotalAmount extends Component {
  remainingAmount = (original, cut) => {
    return numberWithCommas((original - cut).toFixed(2));
  };
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
          <span className="amount-fee">${freshbooksCut} </span> for providing their services.
        </p>
      </div>
    );
  }
}

TotalAmount.propTypes = {
  originalAmount: PropTypes.number,
  freshbooksCut: PropTypes.number
};

export default TotalAmount;
