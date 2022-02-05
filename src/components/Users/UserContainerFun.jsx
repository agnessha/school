import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    changeCurrentPageAction,
    changeFetchingStatus, changeFollowingStatus,
    followAction,
    getUsersAction,
    setUsersAction, setUsersTotalCountAction,
    unfollowAction
} from "../../redux/usersReducer";
import Users from "./UsersC";
import {useParams} from "react-router-dom";
import {UsersApi} from "../../api/api";



const UserAPI = (props) => {

    let { userid } = useParams()

    useEffect(() => {

            UsersApi.getUsers().then((data) => {
                props.changeFetchingStatus(false)
                props.getUsersAction(data.items)
            });
    }, [userid]);

    let changeCurrentPage = (event) => {
        console.log(event);
        let page = parseInt(event.currentTarget.dataset.value)
        props.changePageAction(page)
        props.changeFetchingStatus(true)

        const axios = require('axios').default;
        UsersApi.changeCurrentPage(event.currentTarget.dataset.value).then(data => {
            props.changeFetchingStatus(false)
            props.getUsersAction(data.items)
        })
    }
    return (
        <div>
            <Users
                pageSize={props.pageSize}
                usersTotalCount={props.usersTotalCount}
                currentPage={props.currentPage}
                users={props.users}
                follow1={props.follow1}
                unfollow={props.unfollow}
                changeCurrentPage={changeCurrentPage}
                isFetching={props.isFetching}
                isFollowing={props.isFollowing}
                changeFollowingStatus={props.changeFollowingStatus}
            />
        </div>
    )
}

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        usersTotalCount: state.usersPage.usersTotalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing
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
        follow1: (userId) => {
            dispatch(followAction(userId))
        },
        unfollow: (userId) => {
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
        },
        changeFetchingStatus: (status) => {
            dispatch(changeFetchingStatus(status))
        },
        changeFollowingStatus: (status, id) => {

            dispatch(changeFollowingStatus(status, id))
        }
    }
}

const UserContainerFun = connect(mapStateToProps, mapDispatchToProps)(UserAPI)

export default UserContainerFun