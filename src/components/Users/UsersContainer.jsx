import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAction, unfollowAction} from "../../redux/usersReducer";


let mapStateToProps = (state) => {


    return {
        usersPage: state.usersPage,
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
