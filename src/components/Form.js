import React, { Component } from "react";
import NumberFormat from 'react-number-format';

class Form extends Component {
  render() {
    const { calculateAmount, handleInput, amountValue } = this.props;
    return (
      <form className="form" action="" onSubmit={calculateAmount}>
        <label htmlFor="amountInput" className="form__label">
          Amount ($)
        </label>
        <NumberFormat thousandSeparator={true}
          prefix="$"
          className="form__input"
          id="amountInput"
          onValueChange={handleInput}
          value={amountValue} />
        <button className="form__submit" type="submit">
          Calculate Fees
        </button>
      </form>
    );
  }
}

export default Form;
