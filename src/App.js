/* eslint-disable no-restricted-globals */
import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import { numberWithCommas } from "./utils/functions";
import TotalAmmount from "./components/TotalAmount";

class App extends Component {
  state = {
    originalAmount: ``,
    freshbooksCut: ``
  };

  handleInput = ({ target: { value } }) => {
    this.setState({ originalAmount: value });
  };

  calculateAmount = () => {
    event.preventDefault();
    console.log("submitted form");
    this.setState({
      freshbooksCut: this.getAmountYouGet(this.state.originalAmount)
    });
    console.log(
      `freshbooks will take: ${this.getAmountYouGet(this.state.originalAmount)}`
    );
  };

  getAmountYouGet = amount => {
    const freshbooksCut = (amount * 0.029 - 0.3).toFixed(2);
    return freshbooksCut;
  };

  render() {
    return (
      <div className="app">
        <h1 className="app-title">Fee Calculator</h1>
        <Form
          calculateAmount={this.calculateAmount}
          handleInput={this.handleInput}
          amountValue={this.state.originalAmount}
        />
        {this.state.freshbooksCut && (
          <TotalAmmount
            freshbooksCut={this.state.freshbooksCut}
            originalAmount={this.state.originalAmount}
          />
        )}
      </div>
    );
  }
}

export default App;
