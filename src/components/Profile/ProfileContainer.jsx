import React from "react";
import s from './Profile.module.css';
import profileImg from '../../img/Landscape-Color.jpg'
import MyPosts from "./MyPosts/MyPosts";
import Profile__info from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {connect} from "react-redux";
import {addUserDataAC} from "../../redux/profileReducer";
import {changeFetchingStatus} from "../../redux/usersReducer";
import {useParams} from "react-router-dom";


const ProfileAPI = (props) => {

    let {userId} = useParams()
    if (props.userData === null) {
        GetUrl(userId, props)
    }
    return (

        <div className={s.content}>
            <div className={s.profile_infoImg}>
                <img src={profileImg} alt=""/>
            </div>
            <div>
                <Profile__info userData={props.userData} photo={props.photo}/>
                <MyPostsContainer

                />
            </div>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        userData: state.profilePage.userData,
        photo: state.profilePage.userData.photos.small
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        addUserData: (userData) => {
           dispatch(addUserDataAC(userData))
        },
        changeFetchingStatus: (status) => {
            dispatch(changeFetchingStatus(status))
        }
    }
}


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPI)

export default ProfileContainer;

function GetUrl(userId , props) {
    const axios = require('axios').default;

    axios
        .get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
        .then(
            response => {
                console.log(response)
                console.log(props.userData)
                props.changeFetchingStatus(false)
                props.addUserData(response.data)
                // this.props.setUsersCount(response.data.totalCount)
            }
        );
}