import { PricingCardToggleProps } from "./PricingCard.types";

const PricingCardToggle: React.FC<PricingCardToggleProps> = (props) => {
  return <button onClick={() => props.onToggle}>toggle</button>;
};

export { PricingCardToggle };
