import React from "react";
import {connect} from "react-redux";
import Users from "./UsersC";
import {
    changeCurrentPageAction, changeFetchingStatus,
    followAction,
    getUsersAction,
    setUsersAction, setUsersTotalCountAction,
    unfollowAction
} from "../../redux/usersReducer";
import s from "./Users.module.css";
import avatarImg from "../../img/avatar.svg";


class UsersAPI extends React.Component {
    constructor(props) {
        super(props);
        this.showMoreUsers = this.showMoreUsers.bind(this)
        this.clickNum = 1
        this.changeCurrentPage = this.changeCurrentPage.bind(this)
    }

    showMoreUsers() {
        const axios = require('axios').default;
        this.clickNum = this.clickNum + 1
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users?count=2&page=' + this.clickNum)
            .then(
                response => {
                    this.props.setUsersAction(response.data.items)
                }
            );
    }

    changeCurrentPage(event) {
        console.log(event);
        let page = parseInt(event.currentTarget.dataset.value)
        this.props.changePageAction(page)
        this.props.changeFetchingStatus(true)

        const axios = require('axios').default;
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users?count=4&page=' + event.currentTarget.dataset.value)
            .then(
                response => {
                    this.props.changeFetchingStatus(false)

                    this.props.getUsersAction(response.data.items)
                }
            );
    }

    componentDidMount() {
        this.props.changeFetchingStatus(true)
        const axios = require('axios').default;
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users?count=4')
            .then(
                response => {
                    console.log(response.data.items)
                    this.props.changeFetchingStatus(false)
                    this.props.getUsersAction(response.data.items)
                    // this.props.setUsersCount(response.data.totalCount)
                }
            );

    }

    render() {
        return (
            <Users pageSize={this.props.pageSize}
                   usersTotalCount={this.props.usersTotalCount}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow1={this.props.follow1}
                   unfollow={this.props.unfollow}
                   changeCurrentPage={this.changeCurrentPage} showMoreUsers={this.showMoreUsers}
                   isFetching={this.props.isFetching}
            />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersTotalCount: state.usersPage.usersTotalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)

export default UsersContainer;
