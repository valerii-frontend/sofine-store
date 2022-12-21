import { Link } from "react-router-dom";

import logo from "../../assets/icons/logo_KEUNE_WHITE.svg";

import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link to='/' className={styles.logo}>
      <img src={logo} alt='Keune logo' />
    </Link>
  );
}
