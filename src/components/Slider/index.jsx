import { Link } from "react-router-dom";

import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import slide01 from "../../assets/images/slide1-big.jpg";
import slide02 from "../../assets/images/slide2-big.jpg";
import slide03 from "../../assets/images/slide3-big.jpg";

import arrow from "../../assets/icons/chevron-right.svg";
import arrowWhite from "../../assets/icons/chevron-right_WHITE.svg";
import line from "../../assets/icons/line.svg";
import lineWhite from "../../assets/icons/line_WHITE.svg";

import "swiper/css";
import "./slider.css";
import styles from "./Slider.module.css";

export default function Slider({ setIsLight, isLight }) {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      loop={true}
      navigation={true}
      autoplay={true}
      pagination={{
        clickable: true,
      }}
      onSlideChange={(e) => {
        setIsLight(e.slides[e.activeIndex].classList.contains("light"));
      }}>
      <SwiperSlide>
        <img src={slide01} alt='woman with light hair' />
        <div className={styles.content}>
          <div className={styles.title}>
            o1. <img className={styles.cross} src={isLight ? line : lineWhite} />
          </div>
          <h2>Bez kompromisu.</h2>
          <h2>Idealnie takie jak lubisz.</h2>
          <h3>
            keune <span>design</span>
          </h3>
          <Link>
            <b></b>
            <span>
              <img src={isLight ? arrow : arrowWhite} />
            </span>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide className='light'>
        <img src={slide02} alt='man in white shirt' />
        <div className={styles.content}>
          <div className={styles.title}>
            o1. <img className={styles.cross} src={isLight ? line : lineWhite} />
          </div>
          <h2>Bez kompromisu.</h2>
          <h2>Idealnie takie jak lubisz.</h2>
          <h3>
            keune <span>design</span>
          </h3>
          <Link>
            <b></b>
            <span>
              <img src={isLight ? arrow : arrowWhite} />
            </span>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide03} alt='woman with the red hair in the garden' />
        <div className={styles.content}>
          <div className={styles.title}>
            o1. <img className={styles.cross} src={isLight ? line : lineWhite} />
          </div>
          <h2>Bez kompromisu.</h2>
          <h2>Idealnie takie jak lubisz.</h2>
          <h3>
            keune <span>design</span>
          </h3>
          <Link>
            <b></b>
            <span>
              <img src={isLight ? arrow : arrowWhite} />
            </span>
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
