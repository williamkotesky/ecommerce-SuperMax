import AppRoutes from "./utilities/AppRoutes";
import NavbarUp from "./layout/NavbarUp";
import NavbarDown from "./layout/NavbarDown";

function App() {
  return (
    <>
      <NavbarUp />
      <NavbarDown />

      <AppRoutes />
    </>
  );
}

export default App;
