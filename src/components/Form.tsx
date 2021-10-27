import React from "react";
import NumberFormat, { NumberFormatValues } from "react-number-format";

type FormProps = {
  calculateAmount: any;
  handleInput: (values: NumberFormatValues) => void;
  amountValue: any;
};

function Form({ calculateAmount, handleInput, amountValue }: FormProps) {
  return (
    <form className="form" action="" onSubmit={calculateAmount}>
      <label htmlFor="amountInput" className="form__label">
        Amount ($)
      </label>
      <NumberFormat
        thousandSeparator={true}
        prefix="$"
        className="form__input"
        id="amountInput"
        onValueChange={handleInput}
        value={amountValue}
      />
      <button className="form__submit" type="submit">
        Calculate Fees
      </button>
    </form>
  );
}

export default Form;
