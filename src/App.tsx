import React, { Component, FormEvent, useState } from "react";
import Form from "./components/Form";
import TotalAmount from "./components/TotalAmount";
import AffiliateLink from "./components/AffiliateLink";
import SuggestedAmount from "./components/SuggestedAmount";

import "./App.css";
import { NumberFormatValues } from "react-number-format";

export type TReverseCut = (amount: number | null) => number;

function App() {
  const [isAffiliateOpen, setIsAffiliateOpen] = useState(false);
  const [originalAmount, setOriginalAmount] = useState<number | null>(null);
  const [freshbooksCut, setFreshbooksCut] = useState<number | null>(null);
  const [submit, setSubmit] = useState<"success" | "error" | null>(null);

  function handleInput({
    formattedValue,
    value,
    floatValue,
  }: NumberFormatValues) {
    floatValue && setOriginalAmount(floatValue);
    setFreshbooksCut(freshbooksCut);
    setSubmit(null);
  }

  function handleFreshbooksCut(amount: string | number): number {
    if (typeof amount == "number") {
      return Number((amount * 0.029 + 0.3).toFixed(2));
    } else {
      return Number((Number(amount) * 0.029 + 0.3).toFixed(2));
    }
  }

  const reverseCut: TReverseCut = (amount: number | null) => {
    const newAmount = (Number(amount) / 0.971 + 0.3).toFixed(2);
    return Number(newAmount);
  };

  function toggleAffiliate() {
    setIsAffiliateOpen(!isAffiliateOpen);
  }

  function calculateAmount(event: FormEvent) {
    event.preventDefault();
    const amountNumber = Number(originalAmount);

    if (amountNumber && amountNumber > 0) {
      setFreshbooksCut(handleFreshbooksCut(amountNumber));
      setSubmit("success");
    } else {
      setSubmit("error");
      setFreshbooksCut(0);
      setOriginalAmount(0);
    }
  }

  return (
    <div className="app">
      <h1 className="app-title">Invoice Fee Calculator</h1>
      <p className="app-subtitle">
        Calculate how much money will end up in your pocket after Freshbooks'
        fees.
      </p>
      <Form
        calculateAmount={calculateAmount}
        handleInput={handleInput}
        amountValue={originalAmount}
      />
      {submit === `success` && (
        <TotalAmount
          freshbooksCut={freshbooksCut}
          originalAmount={originalAmount}
        />
      )}
      {submit === `success` && (
        <SuggestedAmount
          originalAmount={originalAmount}
          reverseCut={reverseCut}
        />
      )}
      z
      {submit === "error" && (
        <p className="notification notification--error">
          Please enter a valid value
        </p>
      )}
      {/*<HowItWorks />*/}
      <AffiliateLink
        isAffiliateOpen={isAffiliateOpen}
        toggleAffiliate={toggleAffiliate}
      />
      <p className="site-credit">
        Site by <a href="https://adamrasheed.com">Adam Rasheed</a>
      </p>
    </div>
  );
}
export default App;
