import {postUserSignIn, successUserSignIn} from './action';
import { takeLatest, put, call, delay } from "redux-saga/effects";
import axios from 'axios';
import qs from 'qs';

export const postman = axios.create({
    baseURL: 'http://erp.apptrix.ru/api',
    paramsSerializer: params => qs.stringify(params, {'indices': false})
});

// ОТправление данных (логин)
function* setLoginUserInSistem(api, action) {
    try {
        console.warn('[saga ===> setLoginUser ===> ]');
        //yield put(changeLoading(true));

        const apiRes = yield call(() => postman.post('/clients/token/', action.payload));
        
        // const stabStudentList = item
        yield put(successUserSignIn(apiRes.data));

        console.log(apiRes.data)

        let id = '';
        id = apiRes.data.client_id;
        localStorage.setItem('id', id);
        
        action.meta && action.meta(apiRes.data);
        //yield put(changeLoading(false));
    }
    catch (e) {
        // yield put(changeLoading(false));
        // yield put(setError(e));
        console.error('[userLoginIn saga2] error', e.message);

        alert(e)
        // yield delay(3000);
        // yield put(clearError(e));
    }
}

function* userLoginIn(ea) {
  yield takeLatest(postUserSignIn().type, setLoginUserInSistem, ea);
}

export default userLoginIn;
