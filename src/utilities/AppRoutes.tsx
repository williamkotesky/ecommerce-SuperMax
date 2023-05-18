import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Promotions from "../pages/Promotions";
import OfferOfTheDay from "../pages/OfferOfTheDay";
import NewProducts from "../pages/NewProducts";
import About from "../pages/About";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/promocoes" element={<Promotions />} />
      <Route path="/ofertasDoDia" element={<OfferOfTheDay />} />
      <Route path="/novosProdutos" element={<NewProducts />} />
      <Route path="/sobre" element={<About />} />
    </Routes>
  );
}

export default AppRoutes;
