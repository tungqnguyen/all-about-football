import * as actionTypes from './actionTypes';
 
const initialStates = {
  matches: null,
  fetched: false,
  fetchedHighlights: false,
}

const reducer = (state = initialStates, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_MATCH:
      return {
        ...state,
        matches: action.matches,
        fetched: action.fetched
      }
    case actionTypes.DISPLAY_HIGHLIGHTS:
      return {
        ...state,
        highlights: action.highlights,
        fetchedHighlights: action.fetchedHighlights
      }
      default:
        return state;
  }
};

export default reducer;