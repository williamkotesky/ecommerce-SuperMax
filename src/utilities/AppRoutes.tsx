import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Promotions from "../pages/Promotions";
import OfferOfTheDay from "../pages/OfferOfTheDay";
import NewProducts from "../pages/NewProducts";
import About from "../pages/About";
import PersonalInfo from "../pages/PersonalInfo";
import Wishlist from "../pages/Whishlist";
import Cart from "../pages/Cart";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/categorias", element: <Categories /> },
      { path: "/promocoes", element: <Promotions /> },
      { path: "ofertasDoDia", element: <OfferOfTheDay /> },
      { path: "novosProdutos", element: <NewProducts /> },
      { path: "sobre", element: <About /> },
      { path: "informacoesConta", element: <PersonalInfo /> },
      { path: "listaDeDesejos", element: <Wishlist /> },
      { path: "carrinhoDeCompras", element: <Cart /> },
    ],
  },
]);

export default router;

// function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/categorias" element={<Categories />} />
//       <Route path="/promocoes" element={<Promotions />} />
//       <Route path="/ofertasDoDia" element={<OfferOfTheDay />} />
//       <Route path="/novosProdutos" element={<NewProducts />} />
//       <Route path="/sobre" element={<About />} />
//       <Route path="/informacoesConta" element={<PersonalInfo />} />
//       <Route path="/listaDeDesejos" element={<Wishlist />} />
//       <Route path="/carrinhoDeCompras" element={<Cart />} />
//     </Routes>
//   );
// }

// export AppRoutes;
