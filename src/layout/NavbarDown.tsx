import { NavLink } from "react-router-dom";
import styles from "./NavbarDown.module.css";

function NavbarDown() {
  return (
    <>
      <nav className={styles.navbarDownContainer}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Promoções</NavLink>
        <NavLink to="/">Oferta do Dia</NavLink>
        <NavLink to="/">Novidades</NavLink>
        <NavLink to="/about">Sobre</NavLink>
      </nav>
    </>
  );
}

export default NavbarDown;
