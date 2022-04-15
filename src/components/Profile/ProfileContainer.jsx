import React from "react";
import s from "./Profile.module.css";
import profileImg from "../../img/Landscape-Color.jpg";
import Profile__info from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { connect } from "react-redux";
import {addUserDataAC, getStatus, getUserDataThunkCreator,
    updateUserStatusThunkCreator} from "../../redux/profileReducer";
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
    console.log(props)
    const navigate = useNavigate()
    let { userId } = useParams();

    useEffect(() => {
        props.getUserDataThunkCreator()
    }, [userId]);

    let updateStatus = (status) => {
        props.updateUserStatusThunkCreator(status)
    }

        return (
            <div className={s.content}>
                <div className={s.profile_infoImg}>
                    <img src={profileImg} alt="" />
                </div>
                <div>
                    <Profile__info
                        updateStatus={updateStatus}
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
        },
        getUserDataThunkCreator: (userId) => {dispatch(getUserDataThunkCreator(userId))},
        updateUserStatusThunkCreator: (status) => {dispatch(updateUserStatusThunkCreator(status))}
    };
};



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // userAuthHoc
)(ProfileAPI)


