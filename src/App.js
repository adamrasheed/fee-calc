/* eslint-disable no-restricted-globals */
import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import { numberWithCommas } from "./utils/functions";
import TotalAmmount from "./components/TotalAmount";
import AffiliateLink from "./components/AffiliateLink";
import HowItWorks from "./components/HowItWorks";

class App extends Component {
  state = {
    originalAmount: ``,
    freshbooksCut: ``,
    submit: null
  };

  handleInput = ({ target: { value } }) => {
    const freshbooksCut = this.freshbooksCut(value);
    this.setState({ originalAmount: value, freshbooksCut, submit: null });
  };

  calculateAmount = () => {
    event.preventDefault();
    console.log("submitted form");
    const { originalAmount } = this.state;
    const amountNumber = Number(originalAmount);

    console.log(amountNumber);

    if (amountNumber && amountNumber > 0) {
      this.setState({
        freshbooksCut: this.freshbooksCut(this.state.originalAmount),
        submit: `success`
      });
    } else {
      this.setState({ submit: "error", originalAmount: ``, freshbooksCut: `` });
    }
  };

  freshbooksCut = amount => {
    const freshbooksCut = (amount * 0.029 + 0.3).toFixed(2);
    return freshbooksCut;
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
          <TotalAmmount
            freshbooksCut={this.state.freshbooksCut}
            originalAmount={this.state.originalAmount}
          />
        )}
        {this.state.submit === "error" && (
          <p className="notification notification--error">
            Please enter a valid value
          </p>
        )}
        <HowItWorks />
        <AffiliateLink link="/" />
      </div>
    );
  }
}

export default App;
