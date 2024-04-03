
export const setUserToken = (token) => {
    return {
        type: 'SET_USER_TOKEN',
        payload: token,
    };
};

export const setUserProfile = (userProfile) => {
    return {
        type: 'SET_USER_PROFILE',
        payload: userProfile,
    };
};
export const updateUserProfile = (userProfile) => {
    return {
        type: 'UPDATE_USER_PROFILE',
        payload: userProfile,
    };
};
export const clearUser = () => {
    return {
        type: 'CLEAR_USER',
    };
};
