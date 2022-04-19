import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    changeCurrentPageAction,
    changeFetchingStatus, changeFollowingStatus,
    followAction,
    getUsersAction, getUsersThunkCreator,
    setUsersAction, setUsersTotalCountAction,
    unfollowAction, changeCurrentPageThunkCreator, followThunkCreator,
    unfollowThunkCreator
} from "../../redux/usersReducer";
import Users from "./UsersC";
import {getUsersSelector} from "../../redux/reselectors/users-page-reselect";


const UserListComponent = (props) => {
    useEffect(() => {
        props.getUsersThunkCreator()
    }, []);

    let changeCurrentPage = (event) => {
        let page = parseInt(event.currentTarget.dataset.value)
        props.changeCurrentPageThunkCreator(page)
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
                followThunkCreator={props.followThunkCreator}
                unfollowThunkCreator={props.unfollowThunkCreator}

            />

        </div>
    )
}

let mapStateToProps = (state) => {
    return{
        users: getUsersSelector(state),
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

        changePageAction: (page) => {
            dispatch(changeCurrentPageAction(page))
        },
        changeFetchingStatus: (status) => {
            dispatch(changeFetchingStatus(status))
        },
        changeFollowingStatus: (status, id) => {
            dispatch(changeFollowingStatus(status, id))
        },
        getUsersThunkCreator: () => {dispatch(getUsersThunkCreator())},
        changeCurrentPageThunkCreator: (page) => {dispatch(changeCurrentPageThunkCreator(page))},
        followThunkCreator: (userId) => {dispatch(followThunkCreator(userId))},
        unfollowThunkCreator: (userId) => {dispatch(unfollowThunkCreator(userId))}

    }
}

const UserContainerFun = connect(mapStateToProps, mapDispatchToProps)(UserListComponent)

export default UserContainerFun