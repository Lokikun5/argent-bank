const initialState = {
    token: '',
    userProfile: {},
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER_PROFILE':
            return {
                ...state,
                userProfile: action.payload,
            };
        case 'SET_USER_TOKEN':
            return {
                ...state,
                token: action.payload,
            };
        case 'SET_USER_PROFILE':
            return {
                ...state,
                userProfile: action.payload,
            };
        case 'CLEAR_USER':
            return {
                ...state,
                token: null,
                userProfile: null,
            };
        default:
            return state;
    }
};

export default userReducer;
