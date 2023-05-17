import { RouterProvider } from "react-router-dom";
import NavbarUp from "./layout/NavbarUp";
import router from "./utilities/Routes";

function App() {
  return (
    <>
      <NavbarUp />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
