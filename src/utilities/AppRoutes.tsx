import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Promotions from "../pages/Promotions";
import OfferOfTheDay from "../pages/OfferOfTheDay";
import NewProducts from "../pages/NewProducts";
import About from "../pages/About";
import PersonalInfo from "../pages/PersonalInfo";
import Wishlist from "../pages/Whishlist";
import Cart from "../pages/Cart";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/promocoes" element={<Promotions />} />
      <Route path="/ofertasDoDia" element={<OfferOfTheDay />} />
      <Route path="/novosProdutos" element={<NewProducts />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/informacoesConta" element={<PersonalInfo />} />
      <Route path="/listaDeDesejos" element={<Wishlist />} />
      <Route path="/carrinhoDeCompras" element={<Cart />} />
    </Routes>
  );
}

export default AppRoutes;
