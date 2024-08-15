// App.tsx
import React, { useState } from "react";
import PricingCardList from "./pricing-card/PricingCardList";
import { PricingCardType } from "./pricing-card/PricingCard.types";

const pricingCards: PricingCardType[] = [
  {
    cardTitle: "Free",
    yearlyPrice: 0,
    description: "For starting photographers",
    features: [
      "Browse all apps & websites",
      "Browse flows",
      "Unlimited search results",
      "hello",
    ],
    buttonTitle: "Get started",
    quarterlyPrice: 0,
  },
  {
    cardTitle: "Pro",
    yearlyPrice: 19,
    description: "For seasoned individuals",
    features: [
      "All free features",
      "Unlimited collections",
      "Access app & website archives",
    ],
    buttonTitle: "Best value!",
    quarterlyPrice: 29,
  },
  {
    cardTitle: "Enterprise",
    yearlyPrice: 39,
    description: "For professional photographers",
    features: [
      "All Pro Features",
      "feature 8",
      "feature 9",
      "feature 10",
      "feature 11",
    ],
    buttonTitle: "Get started",
    quarterlyPrice: 49,
  },
];

const App: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true);
  return (
    <div className="min-h-screen w-screen flex flex-col items-center bg-bg-dark-primary">
      <h1 className="text-gray-200 text-7xl font-bold mt-12 mb-6">Pricing</h1>
      <button
        className="mb-12 bg-white px-4 py-2 rounded-full"
        onClick={() => setIsYearly(!isYearly)}
      >
        {isYearly ? "Yearly" : "Quarterly"}
      </button>
      <PricingCardList cards={pricingCards} isYearly={isYearly} />
    </div>
  );
};

export default App;
