
let defaultState = {
    userDataH: null
}

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_USER_DATA':

            return {
                ...state,
                userDataH: {
                    userId: action.userId,
                    userLogin: action.userLogin,
                    userEmail: action.userEmail
                }
            }
        default:
            return state;
    }

}

export const getUserDataAC = (id, login, email) => {
    return ({
        type: 'GET_USER_DATA',
        userId: id,
        userLogin: login,
        userEmail: email
    })
}

export default authReducer;

