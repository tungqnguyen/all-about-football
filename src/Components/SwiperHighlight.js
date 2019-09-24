import React, {Component} from 'react';
import styles from './css/SwiperHighlight.module.css';
import './css/SwiperHighlight.css';

const SwiperHighlight = (props) => {
  return ( 
    <div className={`swiper-slide ${styles.swiperView} itemsContainer`}>
			<div class="play"><img src="http://cdn1.iconfinder.com/data/icons/flavour/button_play_blue.png" alt="" /> </div>
			<img className='image' src={props.highlight.thumbnail} width='100%' height='85%' alt="" />
			<div style={{textAlign:'center'}}>{props.highlight.title}</div>
    </div>
	);
}

export default SwiperHighlight;