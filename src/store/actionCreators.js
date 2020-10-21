import * as axios from 'axios';
import * as actionTypes from './actionTypes';
import { fixtures, highlights } from '../views/Matches/sampleData'
import { formatHighlightResponse, findNext } from './util';
import Cookies from 'js-cookie';

const displayMatch = (matches) => {
  return {
    type: actionTypes.DISPLAY_MATCH,
    matches,
  }
}
const displayHighlights = (highlights) => {
  return {
    type: actionTypes.DISPLAY_HIGHLIGHTS,
    highlights,
  }
}
const displayStandings = (standings) => {
  return {
    type: actionTypes.DISPLAY_STANDINGS,
    standings,
  }
}

export const getNextFixture = (matches) => {
  return {
    type: actionTypes.FIND_NEXT_FIXTURE,
    // index: findNext(matches)
    index: findNext(fixtures.api.fixtures)
  }
}

//country code England: GB 
//C1: 530
//PL-2021: league_id: 2790
export const getMatch = () => {
  return dispatch => {
    // do api calls here
    // axios.get('https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524',{
    //   headers: {
    //     'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
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
    axios.get('https://api-football-v1.p.rapidapi.com/v2/leagueTable/2790', {
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
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
    type: actionTypes.SET_TOKEN,
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
  // return dispatch => {
  //   console.log('sign up info', username, password)
  //   axios.post('https://whgiwsgzff.execute-api.ap-southeast-2.amazonaws.com/dev/user/register',{username, password}).then(res => {
  //     console.log('res', res);
  //     dispatch(signIn(username,password));
  //   }).catch((err) => {
  //     console.log('err', err);
  //   })
  // }

  return dispatch => {
    console.log('sign up info', username, password)
    axios.post('http://localhost:3001/register', { username, password }).then(res => {
      console.log('res', res);
      dispatch(signIn(username, password));
    }).catch((err) => {
      console.log('err', err);
    })
  }
}

export const signIn = (username, password) => {
  // return dispatch => {
  //   axios.post('https://whgiwsgzff.execute-api.ap-southeast-2.amazonaws.com/dev/user/login',{username, password}).then(res => {
  //     console.log('res from sign in', res);
  //     //save token here
  //     Cookies.set('token', res.data.token);
  //     dispatch(setToken(res.data.token));
  //   }).catch()
  // }

  return dispatch => {
    axios.post('http://localhost:3001/login', { username, password }).then(res => {
      console.log('res from sign in', res);
      //save token here
      Cookies.set('token', res.data.token);
      dispatch(setToken(res.data.token));
    }).catch()
  }
}

export const signOut = () => {
  //in sync with the passport backend version
  Cookies.remove('token');
  return {
    type: actionTypes.SET_TOKEN,
    token: false
  }

  // const token = Cookies.get('token');
  // console.log('token b4 sign out', token );
  // return dispatch => {
  //   axios.post(`https://whgiwsgzff.execute-api.ap-southeast-2.amazonaws.com/dev/user/logout`,null, {
  //     headers: {
  //       Authorization: token
  //     }
  //   }).then(res => {
  //     console.log('log out success');
  //     Cookies.remove('token');
  //     dispatch(setToken(false));
  //   }).catch(error => {
  //     Cookies.remove('token');
  //     console.log('error logout')
  //   })
  // }
}

export const saveToCollection = (videoIndex) => {
  // console.log('in redux ', videoIndex);
  return (dispatch, getState) => {
    console.log('current state', getState());
    const video = getState().reducer.highlights[videoIndex]
    const token = Cookies.get('token');
    console.log('key ', token);
    if (token) {
      axios.post('http://localhost:3001/videos/add', 
        video
      , {
        headers: { "Authorization": `JWT ${token}` },
      }).then(res => {
        console.log('res save video ', res.data);
        dispatch({
          type: actionTypes.ADD_VIDEO,
          video: res.data.video
        })
      })
    }

  }
}

export const getCollection = () => {
  const token = Cookies.get('token');
  return (dispatch) => {
    axios.get('http://localhost:3001/videos/', {
      headers:{ "Authorization": `JWT ${token}` },
    }).then(res => {
      console.log('res ', res.data);
      dispatch(displayCollection(res.data.collection));
    })
    
  }
}

const displayCollection = (userVideos) => {
  return {
    type: actionTypes.DISPLAY_COLLECTION,
    userVideos,
  }
}