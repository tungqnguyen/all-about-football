import React, {useState} from 'react';
import Swiper from 'react-id-swiper';
import SwiperView from './SwiperView'
import './css/SwiperHighlight.css'
import leftArrow from '../assets/img/left1.svg';
import rightArrow from '../assets/img/right1.svg';


const Slider = (props) => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type:'bullets',
      clickable: true,
    },
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
      <div style={{marginRight:10, marginBottom:10}}>
        <img onClick={goPrev} alt="" src={leftArrow} style={{height:30, width:30}}/>
        <img onClick={goNext} alt="" src={rightArrow} style={{height:30, width:30, marginLeft: 5}}/>
      </div>  
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