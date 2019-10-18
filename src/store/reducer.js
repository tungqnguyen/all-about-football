import * as actionTypes from './actionTypes';
 
const initialStates = {
  matches: null,
  fetched: false,
  fetchedHighlights: false,
  standings: null,
  fetchedStandings: false,
  nextFixtureIndex: null,
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
    case actionTypes.DISPLAY_STANDINGS:
      return {
        ...state,
        standings: action.standings,
        fetchedStandings: action.fetchedStandings
      }
    case actionTypes.FIND_NEXT_FIXTURE:
      return {
        ...state,
        nextFixtureIndex: action.index,
      }
      default:
        return state;
  }
};

export default reducer;