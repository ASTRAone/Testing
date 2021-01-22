import { handleActions } from 'redux-actions';
import { successGetInfoUser } from './action';

const initialState = {
    userInfo: []
};

Object.freeze(initialState);

export default handleActions(
    {
        [successGetInfoUser().type]: (state, action) => {
            console.log('successGetInfoUser', action);
            return {
                ...state,
                userInfo: action.payload
            }
        },
    },

    initialState
);