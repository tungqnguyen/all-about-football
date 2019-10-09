
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
