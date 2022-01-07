import React from "react";
import {connect} from "react-redux";
import Users from "./UsersC";
import {
    changeCurrentPageAction,
    followAction,
    getUsersAction,
    setUsersAction, setUsersTotalCountAction,
    unfollowAction
} from "../../redux/usersReducer";



let mapStateToProps = (state) => {



    return {
        users: state.usersPage.users,
        usersTotalCount: state.usersPage.usersTotalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        checkStatus: (status) => {
            let value
            if (status === true) {
                return value = 'FOLLOW'
            } else {
                return value = 'UNFOLLOW'
            }
        },
        changeStatusAction: (value, userId) => {
            if (value === 'UNFOLLOW') {
                dispatch(followAction(userId))
            } else {
                dispatch(unfollowAction(userId))
            }
        },
        follow1:(userId) => {
            dispatch(followAction(userId))
        },
        unfollow:(userId) => {
            dispatch(unfollowAction(userId))
        },
        setUsersAction: (users) => {
            dispatch(setUsersAction(users))
        },
        getUsersAction: (users) => {
            dispatch(getUsersAction(users))
        },
        changePageAction: (page) => {
            dispatch(changeCurrentPageAction(page))
        },
        setUsersCount: (num) => {
            dispatch(setUsersTotalCountAction(num))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
