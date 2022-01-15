import React from "react";
import s from './ProfileInfo.module.css';



const Profile__info = (props) => {
console.log(props)
    return (
        <div className={s.profile_info}>
            <div className={s.ava}>
                <img src={props.userData.photos.small ? props.userData.photos.small :
                    "https://klike.net/uploads/posts/2020-04/1587719791_1.jpg"} alt=""/>
            </div>
            <div className={s.description}>
                {props.userData.fullName}
                <br/>
                {props.userData.aboutMe}
                <br/>
                {props.userData.lookingForAJobDescription}
            </div>
        </div>
    );
}


export default Profile__info;