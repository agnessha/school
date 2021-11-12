import React from "react";
import s from './Profile.module.css';
import profileImg from '../../img/Landscape-Color.jpg'
import MyPosts from "./MyPosts/MyPosts";

const Profile__info = (props) => {
    return (
        <div className={s.profile_info}>
            <div className={s.ava}>
                <img src="https://klike.net/uploads/posts/2020-04/1587719791_1.jpg" alt=""/>
            </div>
            <div className={s.description}>
                {props.mainMessage}
            </div>
        </div>
    );
}

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={profileImg} alt=""/>
            </div>
            <div>
                <Profile__info mainMessage='Hello, react-app '/>
                <MyPosts/>
            </div>
        </div>
    );
}

export default Profile;