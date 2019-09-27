import React from 'react';
import styles from './css/SwiperHighlight.module.css';
import './css/SwiperHighlight.css';
import MatchContext from '../context/MatchContext';

const SwiperHighlight = (props) => {
	const {embed, title} = props.highlight;
  return ( 
		<MatchContext.Consumer>
			{(context) => <div className={`swiper-slide ${styles.swiperView} itemsContainer`} onClick={()=> context.toggleModal(embed, title)}>
				<div className="play"><img src="http://cdn1.iconfinder.com/data/icons/flavour/button_play_blue.png" alt="" /> </div>
				<img className='image' src={props.highlight.thumbnail} width='100%' height='85%' alt="" />
				<div style={{textAlign:'center'}}>{props.highlight.title}</div>
			</div>}
		</MatchContext.Consumer>
	);
}

export default SwiperHighlight;