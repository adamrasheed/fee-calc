/* eslint-disable no-restricted-globals */
import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import TotalAmount from "./components/TotalAmount";
import AffiliateLink from "./components/AffiliateLink";
import SuggestedAmount from "./components/SuggestedAmount";

class App extends Component {
  state = {
    originalAmount: null,
    freshbooksCut: 0,
    submit: null,
    affiliateOpen: false
  };

  handleInput = ({formattedValue, value, floatValue}) => {
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
