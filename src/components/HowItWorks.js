import React from "react";

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <button className="how-it-works-toggle">How it Works</button>

      <p>Freshbooks takes 2.9% + $0.30 from each invoice that you send.</p>
      <h3 className="center">What do you get in exchange?</h3>
      <ul>
        <li>A Quick way to invoice your clients</li>
        <li>Late invoice reminders</li>
        <li>Accounting reports that make tax-time infinitely more bearable</li>
      </ul>
    </div>
  );
};

export default HowItWorks;
