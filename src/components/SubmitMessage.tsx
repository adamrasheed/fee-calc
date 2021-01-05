import React from "react";

function SubmitMessage ({status, message}:{status: string; message: string}){
  return (
    <p className={`submit-message submit-message--${status}`}>
      {message}
    </p>
  );
}

export default SubmitMessage;
