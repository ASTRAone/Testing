import { createRootReducer } from '../src/store/index';
import { createBrowserHistory } from "history";
import createSagaMiddleware from 'redux-saga';
import userLoginUp from './store/singup/saga';
import userLoginIn from './store/login/saga';
import userInfoList from './store/reload/saga';
import logger from 'redux-logger';
import {createStore, compose, applyMiddleware} from 'redux';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    createRootReducer(history),
    compose(applyMiddleware(logger, sagaMiddleware))
);    

sagaMiddleware.run(userLoginUp, userLoginIn, userInfoList);  