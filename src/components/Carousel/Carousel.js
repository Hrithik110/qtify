// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card/Card';
import {React, useState} from "react";
// Import Swiper styles
import 'swiper/css';
import styles from "./Carousel.module.css";

const Carousel = ({albumns})=>{
   
  const[isBeginning, setIsBeginning] = useState(true);

  const[isEnd, setIsEnd] = useState(false);


  const onReachBeginning = () => {
    setIsBeginning(true);
    setIsEnd(false);
};

const onReachEnd = () => {
    setIsEnd(true);
    setIsBeginning(false)
};

const onFromEndOrBeginning = () =>{
    setIsBeginning(true);
    setIsEnd(true);
}

    return (
        <div style={{position:"relative"}}>

    {isEnd && <div className={styles.arrowButtonL}>
           
           <i className={`${styles.arrow} ${styles.left}`}></i>
           </div>}
           

        <Swiper
          spaceBetween={20}
          slidesPerView={6}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        }}
          onReachBeginning={onReachBeginning}
          onReachEnd={onReachEnd}
          onSlideChangeTransitionStart={onFromEndOrBeginning}
        >

          
            {albumns && albumns.map(item=>(
                <SwiperSlide key={item.id}>
                <Card cardData={item}/>
                </SwiperSlide>
            ))}
          

        </Swiper>
       {isBeginning && <div className={styles.arrowButton}>
           
            <i className={`${styles.arrow} ${styles.right}`}></i>
            </div>}
        </div>
      );
}

export default Carousel;