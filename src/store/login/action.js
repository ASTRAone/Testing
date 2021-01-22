// Логин
export function postUserSignIn(payload, meta) {
    return {
        type: 'POST_USER_SIGN_IN',
        payload,
        meta
    };
};

export function successUserSignIn(payload) {
    return {
        type: 'POST_USER_SIGN_IN_SUCCESS',
        payload
    };
};