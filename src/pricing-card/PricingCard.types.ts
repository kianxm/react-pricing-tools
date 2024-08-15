import { ButtonHTMLAttributes } from "react";

export type PricingCardType = {
  cardTitle: string;
  features: string[];
  yearlyPrice: number;
  quarterlyPrice?: number;
  description: string;
  style?: "arrow" | "checkmark" | "dotted";
  buttonTitle?: string;
};

export interface PricingCardProps {
  cardTitle: string;
  features: string[];
  yearlyPrice: number;
  quarterlyPrice?: number;
  description?: string;
  style?: "arrow" | "checkmark" | "dotted";
  buttonTitle?: string;
  isYearly: boolean;
  hideButton?: boolean;
  hideFeatures?: boolean;
}

export interface PricingCardTitleProps {
  title?: string;
}

export interface PricingCardDescriptionProps {
  description?: string;
}

export interface PricingCardButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonTitle: string;
}

export interface PricingCardPriceProps {
  price: number;
  isYearly?: boolean;
}

export interface PricingCardFeaturesProps {
  key?: number;
  feature: string;
}

export interface PricingCardToggleProps {
  onToggle: (state: boolean) => void;
}
