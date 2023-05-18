import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavbarDown.module.css";

function NavbarDown() {
  const [dropdownMenu, setDropdownMenu] = useState("dropdownOff");
  const [dropdownFlag, setDropdownFlag] = useState(false);
  const targetDropdown = useRef<HTMLLIElement>(null);

  function handleClickDropDown(): void {
    if (!dropdownFlag) {
      setDropdownMenu("dropdownOn");
      setDropdownFlag(true);
      return;
    }
    setDropdownMenu("dropdownOff");
    setDropdownFlag(false);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        targetDropdown.current &&
        !targetDropdown.current.contains(event.target as Node)
      ) {
        setDropdownMenu("dropdownOff");
        setDropdownFlag(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <nav className={styles.navbarDownContainer}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : "inactive"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : "inactive"
              }
              to="/promocoes"
            >
              Promoções
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : "inactive"
              }
              to="/ofertasDoDia"
            >
              Ofertas do Dia
            </NavLink>
          </li>
          <li className={styles.newProducts}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : "inactive"
              }
              to="/novosProdutos"
            >
              Novos Produtos
            </NavLink>
          </li>
          <li className={styles.about}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : "inactive"
              }
              to="/sobre"
            >
              Sobre
            </NavLink>
          </li>

          <li onClick={handleClickDropDown} ref={targetDropdown}>
            Mais+
          </li>
        </ul>
        <div className={styles[dropdownMenu]}>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : "inactive"
                }
                to="/novosProdutos"
              >
                Novos Produtos
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : "inactive"
                }
                to="/sobre"
              >
                Sobre
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavbarDown;
