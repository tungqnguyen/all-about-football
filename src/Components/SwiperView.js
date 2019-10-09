import React from 'react';
import styles from './css/SwiperView.module.css';
import {matchLogo} from '.././util/util'


const displayTimeOrResult = (fixture) => {
  if(fixture.score.fulltime != null) {
    return fixture.score.fulltime
  }
  else {
    const time = new Date(fixture["event_date"])
      .toLocaleTimeString(undefined,{hourCycle: "h24", hour:'2-digit', minute:'2-digit'});  
      return time;
    }
}
const SwiperView = (props) => {
    const {homeTeam, awayTeam} = props.fixture;
    // console.log('current fixture',props.fixture)
    const date = new Date(props.fixture["event_date"]).toDateString();
    return ( 
      <div className={`${styles.swiperView} swiper-slide `}>
        <div style={{height:'20%'}}>{date}</div>
        <div className={styles.matchInfo}>
            <img src={matchLogo(homeTeam["team_name"])} alt="" className={styles.iconLogo} />
            <div style={{margin:'20px'}}> {displayTimeOrResult(props.fixture)} </div>
            <img src={matchLogo(awayTeam["team_name"])} alt="" className={styles.iconLogo}/>
        </div>
        <div style={{textAlign:'center'}}>{homeTeam["team_name"]} - {awayTeam["team_name"]}</div>
      </div>
     );
}
export default SwiperView;