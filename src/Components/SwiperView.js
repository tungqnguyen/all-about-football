import React, {Component} from 'react';
import * as logo from './teamNameToAssetMap';
import styles from './css/SwiperView.module.css';

const SwiperView = (props) => {
    const time = new Date(props.fixture["event_date"])
      .toLocaleTimeString(undefined,{hourCycle: "h24", hour:'2-digit', minute:'2-digit'});
    const date = new Date(props.fixture["event_date"]).toDateString();
    return ( 
      <div className={`${styles.swiperView} swiper-slide `}>
        <div style={{height:'20%'}}>{date}</div>
        <div className={styles.matchInfo}>
            <img src={logo.manchesterUnited} alt="test" className={styles.iconLogo} />
            <div style={{margin:'20px'}}> { time } </div>
            <img src={logo.chelsea} alt="1" className={styles.iconLogo}/>
        </div>
      </div>
     );
}
export default SwiperView;