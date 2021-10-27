import React from "react";
import { numberWithCommas } from "../utils/functions";

type TotalAmountProps = {
  originalAmount: number | null;
  freshbooksCut: number | null;
};

function TotalAmount({ originalAmount = 0, freshbooksCut }: TotalAmountProps) {
  function getRemainingAmount(
    original: number | null,
    cut: number | null
  ): string {
    const remainder = Number(original) - Number(cut);
    return numberWithCommas(Number(remainder.toFixed(2)));
  }
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
        <span className="amount-fee">${freshbooksCut} </span> for providing
        their services.
      </p>
    </div>
  );
}

export default TotalAmount;
