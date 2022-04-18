import React from "react";
import s from "./Profile.module.css";
import profileImg from "../../img/Landscape-Color.jpg";
import Profile__info from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { connect } from "react-redux";
import {addUserDataAC, setNewStatus, getUserDataThunkCreator,
    updateUserStatusThunkCreator, setNewStatusThunkCreator} from "../../redux/profileReducer";
import { changeFetchingStatus } from "../../redux/usersReducer";
import {Navigate, useParams} from "react-router-dom";
import { useEffect } from "react";
import {getUserDataAC} from "../../redux/authReducer";
import {profileAPI, UsersApi} from "../../api/api";
import {useNavigate, NavLink} from "react-router-dom";
import {compose} from "redux";
import store from "../../redux/redux-store";
import {userAuthHoc} from "../../hocs/userAuthHoc";
import {
    getStatusSuperSelector,
    getUserDataSuperSelector,
    getUserPhotoSuperSelector
} from "../../redux/reselectors/profile-page-reselector";



const ProfileAPI = (props) => {
    const navigate = useNavigate()
    let { userId } = useParams();

    useEffect(() => {
        props.getUserDataThunkCreator(userId)
    }, [userId]);

    let updateStatus = (status) => {
        props.updateUserStatusThunkCreator(status)
    }
    let setNewStatusDuringEditing = (status) => {
        props.setNewStatusThunkCreator(status)
    }

        return (
            <div className={s.content}>
                <div className={s.profile_infoImg}>
                    <img src={profileImg} alt="" />
                </div>
                <div>
                    <Profile__info
                        updateStatus={updateStatus}
                        setNewStatusDuringEditing={setNewStatusDuringEditing}
                        status={props.status}
                        userData={props.userData}
                        photo={props.photo} />
                    <MyPostsContainer />
                </div>
            </div>
        );

};

let mapStateToProps = (state) => {
    return {
        status: getStatusSuperSelector(state),
        userData: getUserDataSuperSelector(state),
        photo: getUserPhotoSuperSelector(state)
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        setNewStatus: (status) => {
            dispatch(setNewStatus(status))
        },
        setNewStatusThunkCreator: (status) => {dispatch(setNewStatusThunkCreator(status))},
        getUserDataThunkCreator: (userId) => {dispatch(getUserDataThunkCreator(userId))},
        updateUserStatusThunkCreator: (status) => {dispatch(updateUserStatusThunkCreator(status))}
    };
};



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // userAuthHoc
)(ProfileAPI)


