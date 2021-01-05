import React from "react";
import Logo from "../freshbooks-logo.png";

const affLink = 'https://www.shareasale.com/r.cfm?u=1246035&m=52946&b=593723'

type AffiliateLinkProps = {
  link?: string;
  isAffiliateOpen: boolean;
  toggleAffiliate: () => void
}

function AffiliateLink ({ link = affLink, isAffiliateOpen, toggleAffiliate}: AffiliateLinkProps) {
  return (
    <div className="freshbooks-link">
      <a
        href={link}
        className="freshbooks-logo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Logo} alt={link} />
      </a>
      <p
        className="freshbooks-link__title center"
        style={{ margin: `0 auto 1rem` }}
      >
        Get{" "}
        <a href={link} target="_blank" rel="noopener noreferrer">
          Freshbooks
        </a>{" "}
        and make invoicing a breeze. Sign up for Free trial today.
      </p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="btn button freshbooks-link__cta center"
      >
        {" "}
        Get a FREE Trial
      </a>
      <button
        onClick={toggleAffiliate}
        className="freshbooks-link__disclaimer small center"
      >
        Affiliate Disclosure
      </button>
      {isAffiliateOpen && (
        <p className="affiliate-disclosure">
          The FreshBooks button above is an affilate link, which means that if
          you sign up for a freetrial and/or a paid subscription I might receive
          some money at no additional cost to you.
        </p>
      )}
    </div>
  )
}

export default AffiliateLink;
