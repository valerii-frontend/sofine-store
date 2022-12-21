import slide01 from "../../assets/images/slide1-big.jpg";
import slide02 from "../../assets/images/slide2-big.jpg";
import slide03 from "../../assets/images/slide3-big.jpg";

import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./styles.css";

export default function Slider() {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      loop={true}
      navigation={true}
      autoplay={true}
      pagination={{
        clickable: true,
      }}>
      <SwiperSlide>
        <img src={slide01} alt='woman with light hair' />
        <div className='content'>
          <h1>o1. </h1>
          <h2>Bez kompromisu.</h2>
          <h2>Idealnie takie jak lubisz</h2>
          <h3>
            keune <span>design</span>
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide02} alt='man in white shirt' />
        <div className='content'>
          <h1>o1. </h1>
          <h2>Bez kompromisu.</h2>
          <h2>Idealnie takie jak lubisz</h2>
          <h3>
            keune <span>design</span>
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide03} alt='man in white shirt' />
        <div className='content'>
          <h1>o1. </h1>
          <h2>Bez kompromisu.</h2>
          <h2>Idealnie takie jak lubisz</h2>
          <h3>
            keune <span>design</span>
          </h3>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
