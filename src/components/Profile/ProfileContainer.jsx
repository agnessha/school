import React from "react";
import s from "./Profile.module.css";
import profileImg from "../../img/Landscape-Color.jpg";
import Profile__info from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { connect } from "react-redux";
import {addUserDataAC, getStatus} from "../../redux/profileReducer";
import { changeFetchingStatus } from "../../redux/usersReducer";
import {Navigate, useParams} from "react-router-dom";
import { useEffect } from "react";
import {getUserDataAC} from "../../redux/authReducer";
import {profileAPI, UsersApi} from "../../api/api";
import {useNavigate, NavLink} from "react-router-dom";
import {compose} from "redux";
import store from "../../redux/redux-store";
import {userAuthHoc} from "../../hocs/userAuthHoc";



const ProfileAPI = (props) => {
    const navigate = useNavigate()
    let { userId } = useParams();

    useEffect(() => {
        GetUrl(userId, props);
        profileAPI.getStatus(userId).then((data) => {
            props.getStatus(data)
        })
    }, [userId]);
    console.log(props.status)
        return (
            <div className={s.content}>
                <div className={s.profile_infoImg}>
                    <img src={profileImg} alt="" />
                </div>
                <div>
                    <Profile__info
                        getStatus={props.getStatus}
                        status={props.status}
                        userDataH={props.userDataH}
                        userData={props.userData}
                        photo={props.photo} />
                    <MyPostsContainer />
                </div>
            </div>
        );

};

let mapStateToProps = (state) => {
    return {
        status: state.profilePage.status,
        userDataH: state.auth.userDataH,
        userData: state.profilePage.userData,
        photo:
            state.profilePage.userData !== null
                ? state.profilePage.userData.photos.small
                : null,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        addUserData: (userData) => {
            dispatch(addUserDataAC(userData));
        },
        changeFetchingStatus: (status) => {
            dispatch(changeFetchingStatus(status));
        },
        getUserData: (id, login, email) => {
            dispatch(getUserDataAC(id, login, email))
        },
        getStatus: (status) => {
            dispatch(getStatus(status))
        }
    };
};



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // userAuthHoc
)(ProfileAPI)


function GetUrl(userId, props) {
    const axios = require("axios").default;

    axios
        .get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
        .then((response) => {
            props.changeFetchingStatus(false);
            props.addUserData(response.data);
            console.log(props.userData);
            // this.props.setUsersCount(response.data.totalCount)
        });
}