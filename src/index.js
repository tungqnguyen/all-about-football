import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reducer from './store/reducer';
import authReducer from './store/authReducer';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({reducer, authReducer}), composeEnhancers(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <BrowserRouter> 
        <App /> 
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));


serviceWorker.unregister();

