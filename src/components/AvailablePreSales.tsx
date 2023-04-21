import React, { FC, useState } from "react";
import PreSaleCard from "./PreSaleCard";

export interface NFTCard {
  id: number;
  image: string;
  name: string;
  live: boolean;
  details: string;
}

const data: NFTCard[] = [
  {
    id: 0,
    name: "Collection Name",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg",
    live: true,
    details:
      "Payment links generate URLs as way to pay for specific products. generally payment links direct to checkout pages.",
  },
  {
    id: 1,
    name: "Collection Name",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg",
    live: false,
    details:
      "Payment links generate URLs as way to pay for specific products. generally payment links direct to checkout pages.",
  },
  {
    id: 2,
    name: "Collection Name",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg",
    live: false,
    details:
      "Payment links generate URLs as way to pay for specific products. generally payment links direct to checkout pages.",
  },
  {
    id: 3,
    name: "Collection Name",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg",
    live: false,
    details:
      "Payment links generate URLs as way to pay for specific products. generally payment links direct to checkout pages.",
  },
  {
    id: 4,
    name: "Collection Name",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg",
    live: true,
    details:
      "Payment links generate URLs as way to pay for specific products. generally payment links direct to checkout pages.",
  },
  {
    id: 5,
    name: "Collection Name",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg",
    live: false,
    details:
      "Payment links generate URLs as way to pay for specific products. generally payment links direct to checkout pages.",
  },
];

const AvailablePreSales: FC = () => {
  const [preSaleCards, setPreSaleCards] = useState<NFTCard[]>(data);
  return (
    <div className="available-pre-sales">
      <h2>Available Pre-Sales</h2>
      <section className="available-pre-sales-cards-area">
        {preSaleCards.map((card) => (
          <PreSaleCard key={card.id!} cardDetails={card} />
        ))}
      </section>
    </div>
  );
};

export default AvailablePreSales;
