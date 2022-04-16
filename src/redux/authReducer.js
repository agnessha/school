import {profileAPI, UsersApi} from "../api/api";


let defaultState = {
    userDataH: null,
    userStatus: null,
    loginError: false
}

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_LOGIN_ERROR':
            return  {
                ...state,
                loginError: true
            }
        case 'SET_USER_DATA':
            return {
                ...state,
                userDataH: action.data
            }
        case 'SET_USER_STATUS':
            return {
                ...state,
                userStatus: action.status
            }
        case 'GET_USER_DATA':
            return {
                ...state,
                userDataH: {
                    userId: action.userId,
                    userLogin: action.userLogin,
                    userEmail: action.userEmail
                },
            }
        case 'EXIT':
            return {
                userDataH: null
            }
        default:
            return state;
    }

}

const setLoginError = () => {
    return ({
        type: 'SET_LOGIN_ERROR'
    })
}

const setUserData = (data) => {
    return ({
        type: 'SET_USER_DATA',
        data: data
    })
}
const setStatus = (status) => {
    return ({
        type: 'SET_USER_STATUS',
        status: status
    })
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
            if (data.id === undefined) {
                exitFromUserProfile()
            } else {
                profileAPI.getUserData(data.id).then((response) => {
                    dispatch(setUserData(response))
                })
                profileAPI.getStatus(data.id).then((data) => {
                    dispatch(setStatus(data));
                })
            }
        });
    }
}

export const loginThunkCreator = ( email, password, rememberMe) => {
    return (dispatch) => {
        profileAPI.login(email, password, rememberMe).then((response) => {
            console.log(response)
            if (response.resultCode !== 0) {
                dispatch(setLoginError())
            } else {
                profileAPI.getUserData(response.data.userId).then((response) => {
                    dispatch(setUserData(response))
                })
            }
        })

    }
}



export const logoutThunkCreator = () => {
    return (dispatch) => {
        profileAPI.logout().then((response) => {
            if (response.resultCode === 0) {
                dispatch(exitFromUserProfile())
            } else {
                console.log('Error during logout')
            }
        })
    }
}

export default authReducer;

