import { useState } from "react";

export function PromotionsFunction() {
  const [promotionArrayRandom, setPromotionArrayRandom] = useState<number[]>(
    []
  );
  const uniqueNumbersSet = new Set<number>();

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getPromotionArray() {
    while (uniqueNumbersSet.size < 6) {
      const randomNumber = getRandomInt(1, 75);
      uniqueNumbersSet.add(randomNumber);
    }
    setPromotionArrayRandom(Array.from(uniqueNumbersSet));
  }

  return { promotionArrayRandom, getPromotionArray };
}
