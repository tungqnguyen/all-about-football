
import * as logo from './teamNameToAssetMap';

export const matchLogo = (teamName) => {
  const tmp = teamName.replace(/\s+/g,'').toLowerCase();
  const res = Object.keys(logo).reduce((match, keyName) => {
    if (tmp.includes(keyName.toLowerCase()) || keyName.toLowerCase().includes(tmp)) {
      return keyName;
    }
    else return match;
  })
  return logo[res];
}

export const displayTimeOrResult = (fixture) => {
  if(fixture.score.fulltime != null) {
    return fixture.score.fulltime
  }
  else {
    const time = new Date(fixture["event_date"])
      .toLocaleTimeString(undefined,{hourCycle: "h24", hour:'2-digit', minute:'2-digit'});  
      return time;
    }
}
