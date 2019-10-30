import * as axios from 'axios';
import * as actionTypes from './actionTypes';
import { fixtures, highlights } from '../views/Matches/sampleData'
import {formatHighlightResponse ,findNext} from './util';
import Cookies from 'js-cookie';

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

export const getNextFixture = (matches) => {
  return {
    type:actionTypes.FIND_NEXT_FIXTURE,
    index: findNext(matches)
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
    dispatch(getNextFixture(fixtures.api.fixtures))
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

export const checkAuth = () => {
  let token = Cookies.get('token')
  if (token === undefined) {
    token = false;
  }
  return {
    type:actionTypes.SET_TOKEN,
    token
  }
}
const setToken = (token) => {
  return {
    type: actionTypes.SET_TOKEN,
    token
  }
}

export const signUp = (username, password) => {
  return dispatch => {
    console.log('sign up info', username, password)
    axios.post('https://whgiwsgzff.execute-api.ap-southeast-2.amazonaws.com/dev/user/register',{username, password}).then(res => {
      console.log('res', res);
      dispatch(signIn(username,password));
    }).catch((err) => {
      console.log('err', err);
    })
  }
}

export const signIn = (username, password) => {
  return dispatch => {
    axios.post('https://whgiwsgzff.execute-api.ap-southeast-2.amazonaws.com/dev/user/login',{username, password}).then(res => {
      console.log('res from sign in', res);
      //save token here
      Cookies.set('token', res.data.token);
      dispatch(setToken(res.data.token));
    }).catch()
  }
}

export const signOut = () => {
  const token = Cookies.get('token');
  console.log('token b4 sign out', token );
  return dispatch => {
    axios.post(`https://whgiwsgzff.execute-api.ap-southeast-2.amazonaws.com/dev/user/logout`,null, {
      headers: {
        Authorization: token
      }
    }).then(res => {
      console.log('log out success');
      Cookies.remove('token');
      dispatch(setToken(false));
    }).catch(error => {
      Cookies.remove('token');
      console.log('error logout')
    })
  }
}