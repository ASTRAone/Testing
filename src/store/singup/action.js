// Получение информации о пользователе
export function postUserSignUp(payload, meta) {
    return {
        type: 'POST_USER_SIGN_UP',
        payload,
        meta
    };
};

export function successUserSignUp(payload) {
    return {
        type: 'POST_SIGN_UP_SUCCESS',
        payload
    };
};