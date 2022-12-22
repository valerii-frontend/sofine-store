import { useState, useEffect } from "react";

import styles from "./Navigation.module.css";
import arrow from "../../assets/icons/chevron-down.svg";
import arrowWhite from "../../assets/icons/chevron-down_WHITE.svg";

export default function Navigation({ isLight, setIsLight }) {
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
          <a href='#'>Nowosci</a>
        </li>
        <li className={`${styles.drop} ${drop ? styles.active : ""}`} onClick={dropDownClick}>
          <a href='#'>Produkty</a>
          <span>
            <img src={isLight ? arrow : arrowWhite} alt='dropdown icon' />
          </span>
          {drop && (
            <ol className={styles.submenu}>
              <li>
                <a href='#'>Obuwie</a>
              </li>
              <li>
                <a href='#'>Odzież</a>
              </li>
              <li>
                <a href='#'>Akcesoria</a>
              </li>
            </ol>
          )}
        </li>
        <li>
          <a href='#'>Trendy</a>
        </li>
        <li>
          <a href='#'>O firmie</a>
        </li>
        <li>
          <a href='#'>Salony</a>
        </li>
        <li>
          <a href='#'>Dystrybutorzy</a>
        </li>
        <li>
          <a href='#'>Kontakt</a>
        </li>
      </ul>
    </nav>
  );
}
