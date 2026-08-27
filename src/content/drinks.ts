export type Drink = {
  number: string;
  name: string;
  description: string;
  zeroProof?: boolean;
};

export const drinks: Drink[] = [
  {
    number: "01",
    name: "Classic Margarita",
    description: "Bright citrus, balanced sweetness, clean finish.",
  },
  {
    number: "02",
    name: "Strawberry Margarita",
    description: "Fresh berry, lime, and a smooth finish.",
  },
  {
    number: "03",
    name: "Spicy Mango",
    description: "Tropical mango with a gentle heat.",
  },
  {
    number: "04",
    name: "Seasonal Pour",
    description: "A rotating seasonal feature for each edition.",
  },
  {
    number: "00",
    name: "Zero-Proof Pour",
    description: "A spirit-free option built with the same care.",
    zeroProof: true,
  },
];
