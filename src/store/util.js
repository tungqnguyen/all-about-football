export const formatHighlightResponse = (data) => {
  return data.map(el => {
    return {
      embed: el.embed,
      title: el.title,
      thumbnail: el.thumbnail
    }
  })
}
//return index of next match
export const findNext = (matches) => {
  const today = new Date();
  let closest = null;
  for (let i = 0; i < matches.length; i++) {
    if (new Date(matches[i]["event_date"]) - today > 0) {
      // closest = {
      //   index : i
      // }
      closest = i;
      return closest
    }
  }
}