import React, { Component } from "react";

class Form extends Component {
  render() {
    const { calculateAmount, handleInput, amountValue } = this.props;
    return (
      <form className="form" action="" onSubmit={calculateAmount}>
        <label htmlFor="amountInput" className="form__label">
          Amount ($)
        </label>
        <input
          type="text"
          pattern="[0-9]*"
          className="form__input"
          id="amountInput"
          placeholder="1,200.00"
          onChange={handleInput}
          value={amountValue}
        />
        <button className="form__submit" type="submit">
          Calculate Fees
        </button>
      </form>
    );
  }
}

export default Form;
