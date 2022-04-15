import {profileAPI, UsersApi} from "../api/api";

let defaultState = {
    userDataH: null,
}

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                userDataH: action.data
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

export const setUserData = (data) => {
    return ({
        type: 'SET_USER_DATA',
        data: data
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
            }
        });
    }
}

export const loginThunkCreator = ( email, password, rememberMe) => {
    return (dispatch) => {
        profileAPI.login(email, password, rememberMe).then((response) => {
            console.log(response)
            profileAPI.getUserData(response.data.userId).then((response) => {
                dispatch(setUserData(response))
            })
        })
        // UsersApi.auth().then((data) => {
        //     dispatch(getUserDataAC(data.id,
        //         data.login,
        //         data.email))
        // });
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        profileAPI.logout().then((response) => {
            console.log(response)
            if (response.resultCode === 0) {
                dispatch(exitFromUserProfile())
            } else {
                console.log('Error during logout')
            }
        })
    }
}

export default authReducer;

