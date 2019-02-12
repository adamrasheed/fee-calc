import React from "react";
import Logo from "../freshbooks-logo.png";

const AffiliateLink = ({ link }) => {
  return (
    <div className="freshbooks-link">
      <p className="freshbooks-link__title center" style={{ margin: `0` }}>
        Get{" "}
        <a href={link} target="_blank" rel="noopener noreferrer">
          Freshbooks
        </a>{" "}
        and make invoicing a breeze.
      </p>
      <a
        href={link}
        className="freshbooks-logo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Logo} alt={link} />
      </a>
      <p className="freshbooks-link__disclaimer small center">
        Not affiliated with Freshbooks
      </p>
    </div>
  );
};

export default AffiliateLink;
