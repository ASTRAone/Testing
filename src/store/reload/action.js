// Получение данных о пользователе
export function getInfoUser(payload) {
    return {
        type: 'GET_INFO_USER',
        payload,
    };
};

export function successGetInfoUser(payload) {
    return {
        type: 'GET_INFO_USER_SUCCESS',
        payload
    };
};