import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";
import arrow from "../../assets/icons/chevron-down.svg";

export default function Navigation() {
  const [drop, setDrop] = useState(false);
  const [menu, setMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);

    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);

  const dropDownClick = () => {
    setDrop(!drop);
  };
  const burgerClick = () => {
    setMenu(!menu);
  };
  return (
    <nav className={styles.nav}>
      {windowWidth <= 992 && (
        <span className={`${styles.burger} ${menu ? styles.show : ""}`} onClick={burgerClick}></span>
      )}
      <ul className={`${windowWidth <= 992 ? styles.mobileMenu : ""} ${styles.menu} ${menu ? styles.show : ""}`}>
        <li>
          <Link>Nowosci</Link>
        </li>
        <li className={`${styles.drop} ${drop ? styles.active : ""}`} onClick={dropDownClick}>
          <Link>Produkty</Link>
          <span>
            <img src={arrow} alt='dropdown icon' />
          </span>
          {drop && (
            <ol className={styles.submenu}>
              <li>
                <Link>Obuwie</Link>
              </li>
              <li>
                <Link>Odzież</Link>
              </li>
              <li>
                <Link>Akcesoria</Link>
              </li>
            </ol>
          )}
        </li>
        <li>
          <Link>Trendy</Link>
        </li>
        <li>
          <Link>O firmie</Link>
        </li>
        <li>
          <Link>Salony</Link>
        </li>
        <li>
          <Link>Dystrybutorzy</Link>
        </li>
        <li>
          <Link>Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}
