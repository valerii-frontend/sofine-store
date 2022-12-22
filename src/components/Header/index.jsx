import Logo from "../Logo";
import Navigation from "../Navigation";
import Social from "../Social";

import styles from "./Header.module.css";

export default function Header({ isLight, setIsLight }) {
  return (
    <header className={`${styles.header} ${isLight ? styles.light : ""}`}>
      <Logo setIsLight={setIsLight} isLight={isLight} />
      <Navigation setIsLight={setIsLight} isLight={isLight} />
      <Social setIsLight={setIsLight} isLight={isLight} />
    </header>
  );
}
