import {combineReducers, createStore, applyMiddleware } from 'redux';
import {connectRouter} from 'connected-react-router';

import userLoginUpInfo from './singup/reducer';
import userLoginInInfo from './login/reducer';
import userInfo from './reload/reducer';

export const createRootReducer = (history) =>
  combineReducers({
        router: connectRouter(history),
        loginUp: userLoginUpInfo, 
        loginIn: userLoginInInfo,
        information: userInfo,
});