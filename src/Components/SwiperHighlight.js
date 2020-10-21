import React from 'react';
import styles from './css/SwiperHighlight.module.css';
import './css/SwiperHighlight.css';
import MatchContext from '../context/MatchContext';
import playButton from '../assets/img/play-button.svg'

const SwiperHighlight = (props) => {
	// console.log('highlight',  props.highlight);
  return ( 
		<MatchContext.Consumer>
			{(context) => 
				<div className={`swiper-slide ${styles.swiperView} itemsContainer`} onClick={()=> context.toggleModal(props.index)}>
				{/* <div onClick={()=> context.toggleModal(props.index)}> */}
					<div className="play"><img src={playButton} style={{height:60, width:60}} alt="" /> </div>
					<img className='image' src={props.highlight.thumbnail} width='100%' height='85%' alt="" />
					<div style={{textAlign:'center'}}>{props.highlight.title}</div>
				</div>}
		</MatchContext.Consumer>
	);
}

export default SwiperHighlight;