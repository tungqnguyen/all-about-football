import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));
// import 'bootstrap/dist/css/bootstrap.css';
// import "./assets/vendor/nucleo/css/nucleo.css";
// import "./assets/vendor/font-awesome/css/font-awesome.min.css";
// import "./assets/css/argon-design-system-react.css";

const app = (
  <Provider store={store}>
    <BrowserRouter> 
        <App /> 
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));


serviceWorker.unregister();

