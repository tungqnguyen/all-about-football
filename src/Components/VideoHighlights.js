import React from 'react';
import Swiper from 'react-id-swiper';
import SwiperHighlight from './SwiperHighlight'
import styles from './css/SwiperHighlight.module.css';


const VideoHighlights = (props) => {
  const params = {
    slidesPerView: 4,
    slidesPerColumn: 2,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }

  return (
    <Swiper {...params}>
      {props.highlights.map((highlight, i) => {
        return <SwiperHighlight highlight={highlight}/>
      })}
    </Swiper>
  )
};



export default VideoHighlights;