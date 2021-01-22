import {getInfoUser, successGetInfoUser} from './action';
import { takeLatest, put, call, delay } from "redux-saga/effects";
import axios from 'axios';
import qs from 'qs';

export const postman = axios.create({
    baseURL: 'http://erp.apptrix.ru/api',
    paramsSerializer: params => qs.stringify(params, {'indices': false})
});

// Получение данных о пользователе
function* setUserInfo(api, action) {
    try {
        console.warn('[saga ===> setUserInfo ===> ]');
        //yield put(changeLoading(true));

        const apiRes = yield call(() => postman.get(`/clients/?format=${action.payload}`));
        
        // const stabStudentList = item
        yield put(successGetInfoUser(apiRes.data));
        
        // action.meta && action.meta(apiRes.data);
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

function* userInfoList(ea) {
  yield takeLatest(getInfoUser().type, setUserInfo, ea);
}

export default userInfoList;
