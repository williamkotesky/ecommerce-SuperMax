import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavbarUp from "./layout/NavbarUp";
import NavbarDown from "./layout/NavbarDown";
import { PromotionsFunction } from "./utilities/PromotionsFunction";
import { usePromotionContext } from "./contexts/PromotionContext";

function App() {
  const { setPromotionArray } = usePromotionContext();
  const { promotionArrayRandom, getPromotionArray } = PromotionsFunction();

  useEffect(() => {
    getPromotionArray();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setPromotionArray(promotionArrayRandom);
    //eslint-disable-next-line
  }, [promotionArrayRandom]);

  return (
    <>
      <NavbarUp />
      <NavbarDown />
      <Outlet />
    </>
  );
}

export default App;
