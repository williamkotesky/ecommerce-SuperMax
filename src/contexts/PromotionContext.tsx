import { createContext, useContext, useState, useEffect } from "react";
import products from "../utilities/Products";

interface PromotionContextType {
  promotionArray: number[];
  promotionProducts: ProductPromotionType[];
  setPromotionArray: React.Dispatch<React.SetStateAction<number[]>>;
}

interface ProductPromotionType {
  name: string;
  brand: string;
  price: number;
  image: string;
  id: number;
}

export const PromotionContext = createContext<PromotionContextType>({
  promotionArray: [],
  promotionProducts: [],
  setPromotionArray() {
    console.log("Fora do escopo do provider");
  },
});
//eslint-disable-next-line
export function usePromotionContext() {
  return useContext(PromotionContext);
}

export const PromotionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [promotionArray, setPromotionArray] = useState<number[]>([
    1, 2, 3, 4, 5, 6,
  ]);

  const [promotionProducts, setPromotionProducts] = useState<
    ProductPromotionType[]
  >([
    {
      name: "",
      brand: "",
      price: 0,
      image: "",
      id: 0,
    },
  ]);

  useEffect(() => {
    const temporaryArray: ProductPromotionType[] = [];
    if (promotionArray[0] !== 1 && promotionArray[1] !== 2) {
      products.forEach((element) => {
        for (const i of promotionArray) {
          if (element.id === i) {
            temporaryArray.push({
              name: element.name,
              brand: element.brand,
              price: element.price,
              image: element.image,
              id: element.id,
            });
          }
        }
      });
      setPromotionProducts(temporaryArray);
    }
  }, [promotionArray]);

  return (
    <PromotionContext.Provider
      value={{ promotionArray, promotionProducts, setPromotionArray }}
    >
      {children}
    </PromotionContext.Provider>
  );
};
