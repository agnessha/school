import React from "react";
import s from './Profile.module.css';
import profileImg from '../../img/Landscape-Color.jpg'
import MyPosts from "./MyPosts/MyPosts";
import Profile__info from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {

    return (

        <div className={s.content}>
            <div className={s.profile_infoImg}>
                <img src={profileImg} alt=""/>
            </div>
            <div>
                <Profile__info mainMessage='Hello, react-app '/>
                <MyPosts profilePage={props.profilePage}
                         addTextareaValue={props.addTextareaValue}
                         addPost={props.addPost}

                />
            </div>
        </div>
    );
}

export default Profile;