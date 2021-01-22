import { handleActions } from 'redux-actions';
import { successUserSignIn } from './action';

const initialState = {
    userLoginInInfo: []
};

Object.freeze(initialState);

export default handleActions(
    {
        [successUserSignIn().type]: (state, action) => {
            console.log('successUserSignIn', action);
            return {
                ...state,
                userLoginInInfo: action.payload
            }
        },
    },

    initialState
);
