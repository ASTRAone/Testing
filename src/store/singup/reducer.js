import { handleActions } from 'redux-actions';
import { successUserSignUp } from './action';

const initialState = {
    userLoginUpInfo: []
};

Object.freeze(initialState);

export default handleActions(
    {
        [successUserSignUp().type]: (state, action) => {
            console.log('successUserSignUp', action);
            return {
                ...state,
                userLoginUpInfo: action.payload
            }
        },
    },

    initialState
);
