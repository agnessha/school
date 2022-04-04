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
import {getUserDataAC} from "../../redux/authReducer";
import {UsersApi} from "../../api/api";
import {useNavigate, NavLink} from "react-router-dom";



const ProfileAPI = (props) => {
    const navigate = useNavigate()
    let { userId } = useParams();
    if (userId === undefined) {
        navigate('/login')
    }
    useEffect(() => {
        GetUrl(userId, props);
        UsersApi.auth().then((data) => {
            console.log(data)
            props.getUserData(data.data.id,
                data.data.login,
                data.data.email)
        });
    }, [userId]);
    if (props.userDataH === null) {
        navigate('/login')
    } else {
        console.log(props.userData)
        return (
            <div className={s.content}>
                <div className={s.profile_infoImg}>
                    <img src={profileImg} alt="" />
                </div>
                <div>
                    <Profile__info userDataH={props.userDataH} userData={props.userData} photo={props.photo} />
                    <MyPostsContainer />
                </div>
            </div>
        );
    }
};

let mapStateToProps = (state) => {
    return {
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
        }
    };
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPI);

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