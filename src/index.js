import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {  createStore, compose, applyMiddleware, combineReducers } from "redux";
// import {configureStore,compose, applyMiddleware} from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import cartReducer from './store/reducers/cart'

let composeEnhancers=compose;
let rootReducer = combineReducers({
    cartReducer:cartReducer
});
if (typeof window !== "undefined")
{
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const middleWare = [thunk];
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
