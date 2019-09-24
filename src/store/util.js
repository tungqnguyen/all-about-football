export const formatHighlightResponse = (data) => {
  return data.map(el => {
    return {
      embed: el.embed,
      title: el.title,
      thumbnail: el.thumbnail
    }
  })
}