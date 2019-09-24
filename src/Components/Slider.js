import React from 'react';
import Swiper from 'react-id-swiper';
import SwiperView from './SwiperView'
// import styles from './Slider.module.css';


const Slider = (props) => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  }

  return (
    <Swiper {...params}>
      {props.matches.map((fixture, i) => {
        return <SwiperView key={i}  fixture = {fixture}/>
      })}
    </Swiper>
  )
};



export default Slider;