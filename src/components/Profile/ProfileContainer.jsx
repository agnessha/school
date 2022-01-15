import React from "react";
import s from "./Profile.module.css";
import profileImg from "../../img/Landscape-Color.jpg";
import Profile__info from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { connect } from "react-redux";
import { addUserDataAC } from "../../redux/profileReducer";
import { changeFetchingStatus } from "../../redux/usersReducer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


const ProfileAPI = (props) => {
    let { userId } = useParams();
    useEffect(() => {
        GetUrl(userId, props);
    }, [userId]);
    if (props.userData === null) {
        return <div>loading...</div>;
    } else {
        return (
            <div className={s.content}>
                <div className={s.profile_infoImg}>
                    <img src={profileImg} alt="" />
                </div>
                <div>
                    <Profile__info userData={props.userData} photo={props.photo} />
                    <MyPostsContainer />
                </div>
            </div>
        );
    }
};

let mapStateToProps = (state) => {
    return {
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
    };
};

const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileAPI);

export default ProfileContainer;

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