import {UsersApi} from "../api/api";

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
        case 'EXIT':
            return {
                userDataH: null
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
export const exitFromUserProfile = () => {
    return ({
        type: 'EXIT'
    })
}

export const getUserDataThunkCreator = () => {
    return (dispatch) => {
        UsersApi.auth().then((data) => {
           dispatch(getUserDataAC(data.id,
                data.login,
                data.email))
        });
    }
}

export default authReducer;

