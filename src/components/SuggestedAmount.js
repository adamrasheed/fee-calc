import React, { Component } from "react";
import PropTypes from "prop-types";
import { numberWithCommas } from "../utils/functions";

class SuggestedAmount extends Component {
  render() {
    const { originalAmount, freshbooksCut, reverseCut } = this.props;
    return (
      <div className="suggested-amount">
        <p className="suggested-amount__title">
          Want to make ${numberWithCommas(originalAmount)} after fees?{" "}
        </p>
        <p className="suggested-amount__amount">
          You should charge at least{" "}
          <span className="amount amount--large highlight">
            ${numberWithCommas(reverseCut(originalAmount))}.
          </span>
        </p>
      </div>
    );
  }
}

export default SuggestedAmount;
