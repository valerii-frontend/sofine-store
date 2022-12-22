import { Link } from "react-router-dom";

import logoWhite from "../../assets/icons/logo_KEUNE_WHITE.svg";
import logo from "../../assets/icons/logo_KEUNE.svg";

import styles from "./Logo.module.css";

export default function Logo({ isLight, setIsLight }) {
  return (
    <Link to='/' className={styles.logo}>
      <img src={isLight ? logo : logoWhite} alt='Keune logo' />
    </Link>
  );
}
