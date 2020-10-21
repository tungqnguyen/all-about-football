
import * as logo from './teamNameToAssetMap';

//return a logo in asset
export const matchLogo = (teamName) => {
  const refinedTeamName = teamName.replace(/\s+/g,'').toLowerCase();
  // console.log('teamname', refinedTeamName)
  const res = Object.keys(logo).reduce((found, keyName) => {
    if (refinedTeamName.includes(keyName.toLowerCase()) || keyName.toLowerCase().includes(refinedTeamName)) {
      return keyName;
    }
    else return found;
  }, null)
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
