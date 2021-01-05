import React from "react";
import { numberWithCommas } from "../utils/functions";

type TotalAmountProps = {
  originalAmount?: number;
  freshbooksCut?: number;
}

function TotalAmount ({originalAmount, freshbooksCut}: TotalAmountProps) {
  function getRemainingAmount (original, cut): number {
    return numberWithCommas((original - cut).toFixed(2));
  };
  return (
    <div className="total-amount">
      <p className="total-amount__received">
        You will get{" "}
        <span className="amount">
          ${getRemainingAmount(originalAmount, freshbooksCut)}
        </span>{" "}
        after Freshbooks' fees.
      </p>
      <p className="total-amount__freshbooks">
        Freshbooks will take{" "}
        <span className="amount-fee">${freshbooksCut} </span> for providing their services.
      </p>
    </div>
  )
}

export default TotalAmount;
