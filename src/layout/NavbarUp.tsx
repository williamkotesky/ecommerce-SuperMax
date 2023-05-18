import { useState } from "react";
import styles from "./NavbarUp.module.css";
import logo from "../assets/images/superMaxLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function NavbarUp() {
  const [mobileMenuFlag, setMobileMenuFlag] = useState(false);
  const [displayClass, setDisplayClass] = useState("searchMobileDisplayNone");
  const [positionClass, setPositionClass] = useState("searchMobileOut");

  function searchMobileMenu(): void {
    if (!mobileMenuFlag) {
      setDisplayClass("searchMobileDisplayBlock");
      setTimeout(() => {
        setPositionClass("searchMobileIn");
        setMobileMenuFlag(true);
      }, 300);
      return;
    }
    setPositionClass("searchMobileOut");
    setTimeout(() => {
      setDisplayClass("searchMobileDisplayNone");
      setMobileMenuFlag(false);
    }, 300);
  }

  return (
    <>
      <nav className={styles.navbarUpContainer}>
        <ul>
          <li>
            <div className={styles.logo}>
              <img
                src={logo}
                alt="um carrinho de compras cheia de itens de diferentes formas e cores e o nome da loja, SuperMax"
              />
            </div>
          </li>
          <li>
            <div className={styles.search}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                onClick={searchMobileMenu}
              />
              <form className={styles.searchFieldForm}>
                <input
                  type="text"
                  placeholder="Digite sua busca"
                  className={styles.searchField}
                />
                <button type="submit">Buscar</button>
              </form>
            </div>
          </li>
          <li>
            <div className={styles.personalInfo}>
              <div className={styles.user}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className={styles.whishlist}>
                <FontAwesomeIcon icon={faHeart} />
                <span className={styles.navbarNotifications}>1</span>
              </div>
              <div className={styles.cart}>
                <FontAwesomeIcon icon={faCartShopping} />
                <span className={styles.navbarNotifications}>1</span>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      <div className={`${styles[displayClass]} ${styles[positionClass]}`}>
        <form className={styles.searchFieldFormMobile}>
          <input
            type="text"
            placeholder="Digite sua busca"
            className={styles.searchFieldMobile}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </form>
      </div>
    </>
  );
}

export default NavbarUp;
