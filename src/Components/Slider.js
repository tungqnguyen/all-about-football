import React, {useState} from 'react';
import Swiper from 'react-id-swiper';
import SwiperView from './SwiperView'


const Slider = (props) => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev'
    // },
  }
  const [swiper, updateSwiper] = useState(null);
  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <div >
      <div style={{display:'flex', justifyContent:'flex-end'}}>
        <button onClick={goPrev}>Prev</button>
        <button onClick={goNext}>Next</button>    
      </div>
      <Swiper {...params} getSwiper={updateSwiper}>
        {props.matches.map((fixture, i) => {
          return <SwiperView key={i}  fixture = {fixture}/>
        })}
      </Swiper>
    </div>
  )
};



export default Slider;