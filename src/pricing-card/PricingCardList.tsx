import React from "react";
import { PricingCard } from "./PricingCard";
import { PricingCardType } from "./PricingCard.types";

interface PricingCardListProps {
  cards: PricingCardType[];
  isYearly: boolean;
  className?: string;
}

const PricingCardList: React.FC<PricingCardListProps> = ({
  cards,
  isYearly,
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-8 gap-4 lg:max-w-screen-2xl w-full max-w-screen-sm lg:w-auto mx-8 lg:mx-0">
      {cards.map((card, index) => (
        <div key={index} className="flex-1 flex flex-col">
          <PricingCard
            index={index}
            cardTitle={card.cardTitle}
            description={card.description}
            features={card.features}
            yearlyPrice={card.yearlyPrice}
            quarterlyPrice={card.quarterlyPrice}
            buttonTitle={card.buttonTitle}
            isYearly={isYearly}
          />
        </div>
      ))}
    </div>
  );
};

export default PricingCardList;
