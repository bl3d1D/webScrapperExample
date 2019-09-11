import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import axios from "axios"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const initialState = {};


const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

axios.interceptors.request.use(function (config) {
	let token = localStorage.getItem("token")
	config.headers.Authorization = token
	return config
})


ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
