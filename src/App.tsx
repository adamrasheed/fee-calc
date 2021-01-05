import React, { Component, FormEvent, useState } from "react";
import Form from "./components/Form";
import TotalAmount from "./components/TotalAmount";
import AffiliateLink from "./components/AffiliateLink";
import SuggestedAmount from "./components/SuggestedAmount";

import "./App.css";

interface IState {
  originalAmount: number | null;
  freshbooksCut: number | null;
  submit: 'success' | 'error' | null;
  affiliateOpen: boolean;
}

const initState: IState = {
  originalAmount: null,
    freshbooksCut: 0,
    submit: null,
    affiliateOpen: false
}

export type ReverseCutType = (amount: number | null) => string

function App() {
  const [isAffiliateOpen, setIsAffiliateOpen] = useState(false);
  const [originalAmount, setOriginalAmount] = useState<number|null>(null);
  const [freshbooksCut, setFreshbooksCut] = useState<number|null>(null);
  const [submit, setSubmit] = useState<'success'|'error'|null>(null);

  function handleInput ({ formattedValue, value, floatValue }) {
    setOriginalAmount(floatValue);
    setFreshbooksCut(freshbooksCut);
    setSubmit(null);
  };


  function handleFreshbooksCut(amount: string | number) {
    if (typeof amount == 'number') {
      return Number((amount * 0.029 + 0.3).toFixed(2));
    } else {
      return Number((parseFloat(amount) * 0.029 + 0.3).toFixed(2));
    }
  };

  function reverseCut(amount: number): string {
    return Number(amount / 0.971 + 0.3).toFixed(2);
  };

  function toggleAffiliate () {
    setIsAffiliateOpen(!isAffiliateOpen);
  };


  function calculateAmount(event: FormEvent) {
    event.preventDefault();
    const amountNumber = Number(originalAmount);

    if (amountNumber && amountNumber > 0) {
      setFreshbooksCut(handleFreshbooksCut(amountNumber));
      setSubmit('success');
    } else {
      setSubmit('error');
      setFreshbooksCut(0);
      setOriginalAmount(0)
    }
  };


  return (
    <div className="app">
      <h1 className="app-title">Freelance Fee Calculator</h1>
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
          freshbooksCut={freshbooksCut}
          originalAmount={originalAmount}
          reverseCut={reverseCut}
        />
      )}
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
  )
}

class Apps extends Component {
  state = {
    originalAmount: null,
    freshbooksCut: 0,
    submit: null,
    affiliateOpen: false
  };

  handleInput = ({ formattedValue, value, floatValue }) => {
    const freshbooksCut = Number(this.freshbooksCut(floatValue));
    this.setState({ originalAmount: floatValue, freshbooksCut, submit: null });
  };

  calculateAmount = () => {
    event.preventDefault();
    const { originalAmount } = this.state;
    const amountNumber = Number(originalAmount);

    if (amountNumber && amountNumber > 0) {
      this.setState({
        freshbooksCut: this.freshbooksCut(amountNumber),
        submit: `success`
      });
    } else {
      this.setState({
        submit: "error",
        originalAmount: 0,
        freshbooksCut: 0
      });
    }
  };

  freshbooksCut = amount => {
    if (typeof amount == 'number') {
      return Number((amount * 0.029 + 0.3).toFixed(2));
    } else {
      return Number((parseFloat(amount) * 0.029 + 0.3).toFixed(2));
    }
  };

  reverseCut = amount => {
    return Number(amount / 0.971 + 0.3).toFixed(2);
  };

  affiliateToggle = () => {
    this.setState({ affiliateOpen: !this.state.affiliateOpen });
  };

  render() {
    return (
      <div className="app">
        <h1 className="app-title">Freelance Fee Calculator</h1>
        <p className="app-subtitle">
          Calculate how much money will end up in your pocket after Freshbooks'
          fees.
        </p>
        <Form
          calculateAmount={this.calculateAmount}
          handleInput={this.handleInput}
          amountValue={this.state.originalAmount}
        />
        {this.state.submit === `success` && (
          <TotalAmount
            freshbooksCut={this.state.freshbooksCut}
            originalAmount={this.state.originalAmount}
          />
        )}
        {this.state.submit === `success` && (
          <SuggestedAmount
            freshbooksCut={this.state.freshbooksCut}
            originalAmount={this.state.originalAmount}
            reverseCut={this.reverseCut}
          />
        )}
        {this.state.submit === "error" && (
          <p className="notification notification--error">
            Please enter a valid value
          </p>
        )}
        {/*<HowItWorks />*/}
        <AffiliateLink
          affilateOpen={this.state.affiliateOpen}
          affiliateToggle={this.affiliateToggle}
          link="https://www.shareasale.com/r.cfm?u=1246035&m=52946&b=593723"
        />
        <p className="site-credit">
          Site by <a href="https://adamrasheed.com">Adam Rasheed</a>
        </p>
      </div>
    );
  }
}

export default App;
