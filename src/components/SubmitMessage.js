import React, { Component } from "react";
class SubmitMessage extends Component {
  render() {
    const { submit, submitStatus } = this.props;
    return (
      <p className={`submit-message submit-message--${submitStatus}`}>
        {submit}
      </p>
    );
  }
}

export default SubmitMessage;
