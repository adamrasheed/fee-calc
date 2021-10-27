import React from "react";
import { TReverseCut } from "../App";
import { numberWithCommas } from "../utils/functions";

type SuggestedAmountsProps = {
  originalAmount: number | null;
  reverseCut: TReverseCut;
};
function SuggestedAmount({
  originalAmount,
  reverseCut,
}: SuggestedAmountsProps) {
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

export default SuggestedAmount;
