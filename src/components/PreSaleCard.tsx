import React, { FC } from "react";
import { NFTCard } from "./AvailablePreSales";

interface PreSaleCardProps {
  cardDetails: NFTCard;
}

const PreSaleCard: FC<PreSaleCardProps> = ({
  cardDetails,
}: PreSaleCardProps) => {
  return (
    <div className="pre-sale-card">
      <img src={cardDetails.image} alt={cardDetails.name} />
      <div className="pre-sale-card-header">
        <span>{cardDetails.name}</span>
        {cardDetails.live ? <i className="fa-solid fa-check"></i> : null}
      </div>
      <div className="pre-sale-card-body">
        <p>{cardDetails.details}</p>

        <button>Claim</button>
        <div className="pre-sale-social-links">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-discord"></i>
          <i className="fa-solid fa-globe"></i>
        </div>
      </div>
    </div>
  );
};

export default PreSaleCard;
