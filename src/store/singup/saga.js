import {postUserSignUp, successUserSignUp} from './action';
import { takeLatest, put, call, delay } from "redux-saga/effects";
import axios from 'axios';
import qs from 'qs';

export const postman = axios.create({
    baseURL: 'http://erp.apptrix.ru/api',
    paramsSerializer: params => qs.stringify(params, {'indices': false})
});

// Получение данных из БД
function* setUserLoginUp(api, action) {
    try {
        console.warn('[saga ===> setUserLoginUp ===> ]');
        //yield put(changeLoading(true));

        const apiRes = yield call(() => postman.post('/clients/create/', action.payload));
        
        // const stabStudentList = item
        yield put(successUserSignUp(apiRes.data));

        let id = '';
        id = apiRes.data.client_id;
        localStorage.setItem('id', id);

        //yield put(changeLoading(false));
        action.meta && action.meta(apiRes.data);
    }
    catch (e) {
        // yield put(changeLoading(false));
        // yield put(setError(e));
        console.error('[userLoginUp saga1] error', e.message);

        alert(e)
        // yield delay(3000);
        // yield put(clearError(e));
    }
}

function* userLoginUp(ea) {
  yield takeLatest(postUserSignUp().type, setUserLoginUp, ea);
}

export default userLoginUp;
