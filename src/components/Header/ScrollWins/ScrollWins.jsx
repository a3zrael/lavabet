import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import styles from "./ScrollWins.module.scss";

import array from "./dataScroll.jsx";

const ScrollWins = (props) => {
  return (
    <div className={styles.SlowScroll}>
      <Swiper
        autoplay={{
          delay: 0,
        }}
        grabCursor
        slidesPerView="auto"
        speed={5000}
        loop
        spaceBetween={8}
        modules={[Autoplay]}
        slidesOffsetAfter={24}
      >
        {array.map((element, index) => (
          <SwiperSlide key={index} className={styles.users}>
            {element}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ScrollWins;
