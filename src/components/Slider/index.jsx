import slide01 from "../../assets/images/slide1-big.jpg";
import slide02 from "../../assets/images/slide2-big.jpg";

import styles from "./Slider.module.css";

export default function Slider() {
  return (
    <section className={styles.home}>
      <div className={styles.slide}>
        <h1>o1. </h1>
        <h2>Bez kompromisu.</h2>
        <h2>Idealnie takie jak lubisz</h2>
        <h3>
          keune <span>design</span>
        </h3>
        <img src={slide01} alt='woman with light hair' />
      </div>
    </section>
  );
}
