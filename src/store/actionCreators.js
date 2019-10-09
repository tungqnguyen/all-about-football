import * as axios from 'axios';
import * as actionTypes from './actionTypes';
import { fixtures, highlights } from '../views/Matches/sampleData'
import {formatHighlightResponse} from './util'

const displayMatch = (matches) => {
  return {
    type: actionTypes.DISPLAY_MATCH,
    matches,
    fetched: true,
  }
}
const displayHighlights = (highlights) => {
  return {
    type: actionTypes.DISPLAY_HIGHLIGHTS,
    highlights,
    fetchedHighlights: true,
  }
}
const displayStandings = (standings) => {
  return {
    type: actionTypes.DISPLAY_STANDINGS,
    standings,
    fetchedStandings: true,
  }
}

export const getMatch = () => {
  return dispatch => {
    // do api calls here
    // axios.get('https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524',{
    //   headers: {
    //     'X-RapidAPI-Key': 'a1007753bfmsh4f138cfdecab7d3p101053jsne808a78c8134'
    //   }
    // }).then(res => {
    //   console.log('res', res);
    //   dispatch(displayMatch(res.data.api.fixtures))
    // }).catch()
    dispatch(displayMatch(fixtures.api.fixtures));
  }
}

export const getHighlights = () => {
  return dispatch => {
    // do api calls here
    // axios.get('https://www.scorebat.com/video-api/v1/').then(res => {
    //   console.log('res', res.data);
    //   dispatch(displayHighlights(formatHighlightResponse(res.data)));
    // }).catch()
    dispatch(displayHighlights(formatHighlightResponse(highlights)));
  }
}

export const getStandings = () => {
  return dispatch => {
    axios.get('https://api-football-v1.p.rapidapi.com/v2/leagueTable/524',{
      headers: {
        'X-RapidAPI-Key': 'a1007753bfmsh4f138cfdecab7d3p101053jsne808a78c8134'
      }
    }).then(res => {
      console.log('res', res.data);
      dispatch(displayStandings(res.data.api.standings[0]))
    }).catch()
  }
}