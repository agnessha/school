import {act} from "@testing-library/react";

let defaultState = {
    users: [],
    currentPage: 1,
    usersTotalCount: 20,
    pageSize: 4,
    isFetching: true
}

const usersReduce = (state = defaultState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true, }
                    } else {
                        return u
                    }
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.id === u.id){
                        return {...u, followed: false}
                    } else {
                        return u
                    }
                })
            }
        case 'GET_USERS':
            return {
                ...state,
                users: [...action.users]
            }
        case 'SET_USERS':
            if (state.users.length === 0) {
                return {
                    ...state,
                    users: [...action.users]
                }
            } else {
                state.users = state.users.concat(action.users);
                return{
                    ...state,
                    users: state.users

                }
            }
        case 'CHANGE_PAGE':
            return {
                ...state,
                currentPage: action.page
            }
        case 'SET_USERS_TOTAL_COUNT':
            return {
                ...state,
                usersTotalCount: action.num
            }
        case 'CHANGE_FETCHING_STATUS':
            return {
                ...state,
                isFetching: action.status
            }
        default:
            return state;
    }

}

export const followAction = (userId) => {
    return ({
        type: 'FOLLOW',
        id: userId
    })
}
export const unfollowAction = (userId) => {
    return ({
        type: 'UNFOLLOW',
        id: userId
    })
}
export const setUsersAction = (users) => {
    return ({
        type: 'SET_USERS',
        users: users
    })
}
export const getUsersAction = (users) => {
    return ({
        type: 'GET_USERS',
        users: users
    })
}
export const changeCurrentPageAction = (page) => {
    return ({
        type: 'CHANGE_PAGE',
        page: page
    })
}
export const setUsersTotalCountAction = (num) => {
    return ({
        type: 'SET_USERS_TOTAL_COUNT',
        num: num
    })
}
export const changeFetchingStatus = (status) => {
    return ({
        type: 'CHANGE_FETCHING_STATUS',
        status: status
    })
}

export default usersReduce;

