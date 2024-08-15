import {
  PricingCardButtonProps,
  PricingCardDescriptionProps,
  PricingCardFeaturesProps,
  PricingCardPriceProps,
  PricingCardProps,
  PricingCardTitleProps,
} from "./PricingCard.types";

const PricingCard: React.FC<PricingCardProps & { index: number }> = ({
  index,
  cardTitle,
  description,
  yearlyPrice,
  features,
  buttonTitle,
  isYearly,
  quarterlyPrice,
  hideButton,
  hideFeatures,
}) => {
  return (
    <div
      className={`flex flex-col rounded-3xl p-8 h-full text-white border border-stone-700 lg:w-[376px] max-w-2xl ${
        index % 2 === 0 ? "bg-transparent" : "bg-zinc-800"
      }`}
    >
      <PricingCardTitle title={cardTitle} />
      <PricingCardDescription description={description} />
      <PricingCardPrice
        price={isYearly ? yearlyPrice : quarterlyPrice ? quarterlyPrice : 0}
        isYearly={isYearly}
      />
      {!hideButton && (
        <PricingCardButton buttonTitle={buttonTitle ?? "Get started"} />
      )}
      {!hideFeatures && (
        <div className="mt-6 flex-grow">
          {features?.map((feature, index) => (
            <PricingCardFeatures key={index} feature={feature} />
          ))}
        </div>
      )}
    </div>
  );
};

const PricingCardTitle: React.FC<PricingCardTitleProps> = (props) => {
  return <h2 className="font-bold text-4xl mb-1">{props.title}</h2>;
};

const PricingCardDescription: React.FC<PricingCardDescriptionProps> = (
  props
) => {
  return <h2 className="text-gray-500">{props.description}</h2>;
};

const PricingCardPrice: React.FC<PricingCardPriceProps> = ({
  price,
  isYearly,
}) => {
  const billingText =
    price > 0 ? (isYearly ? "billed yearly" : "billed quarterly") : "";
  return (
    <h2 className="w-full text-center py-8 flex flex-col gap-3">
      <span className="text-5xl font-bold">${price}</span>
      {price > 0 && <span className="font-semibold">/month</span>}
      {billingText && <span>{billingText}</span>}
    </h2>
  );
};

const PricingCardButton: React.FC<PricingCardButtonProps> = (props) => {
  return (
    <button className="w-full flex items-center justify-center bg-white text-black py-2.5 rounded-xl font-semibold">
      {props.buttonTitle}
    </button>
  );
};

const PricingCardFeatures: React.FC<PricingCardFeaturesProps> = (props) => {
  return <li className="text-gray-400 py-1">{props.feature}</li>;
};

export { PricingCard };
