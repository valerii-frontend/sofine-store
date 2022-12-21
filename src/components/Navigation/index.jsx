import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";
import arrow from "../../assets/icons/chevron-down.svg";

export default function Navigation() {
  const [drop, setDrop] = useState(false);
  const dropStyles = [styles.drop, drop ? styles.active : ""];
  const dropDownClick = () => {
    setDrop(!drop);
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link>Nowosci</Link>
        </li>
        <li className={dropStyles.join(" ")} onClick={dropDownClick}>
          <Link>Produkty</Link>
          <span>
            <img src={arrow} alt='dropdown icon' />
          </span>
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
