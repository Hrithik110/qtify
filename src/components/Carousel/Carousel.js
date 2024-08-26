import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { React, useState, useRef, useEffect } from "react";
import Card from '../Card/Card';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from "./Carousel.module.css";

const Carousel = ({ albumns, isSongs, uniqueKey }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div style={{ position: "relative" }}>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={6}
        navigation={{
          nextEl: `.${styles[`swiper-button-next-${uniqueKey}`]}`,
          prevEl: `.${styles[`swiper-button-prev-${uniqueKey}`]}`,
        }}
        scrollbar={{ draggable: true }}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {albumns && albumns.map((item) => (
          <SwiperSlide key={item.id}>
            <Card isSongs cardData={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* The navigation buttons with conditional visibility */}
      <div
        className={`${styles['swiper-button']} ${styles[`swiper-button-prev-${uniqueKey}`]} ${isBeginning ? styles.hidden : ''}`}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        &#8249;
      </div>
      <div
        className={`${styles['swiper-button']} ${styles[`swiper-button-next-${uniqueKey}`]} ${isEnd ? styles.hidden : ''}`}
        onClick={() => swiperRef.current?.slideNext()}
      >
        &#8250;
      </div>
    </div>
  );
};

export default Carousel;
