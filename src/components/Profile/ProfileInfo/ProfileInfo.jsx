import React from "react";
import s from './ProfileInfo.module.css';



const Profile__info = (props) => {
    console.log(props)
    return (
        <div className={s.profile_info}>
            <div className={s.ava}>
                <img src={
                    props.userData !== null && props.userData.photos.small ?
                        props.userData.photos.small :
                        "https://klike.net/uploads/posts/2020-04/1587719791_1.jpg"} alt=""/>
            </div>
            <div className={s.description}>
                {props.userData !== null ? props.userData.fullName: props.userDataH.userLogin}
                <br/>
                {props.userData !== null ? props.userData.aboutMe: props.userDataH.userLogin}
                <br/>
                {props.userData !== null ? props.userData.lookingForAJobDescription : 'no'}
            </div>
        </div>
    );
}


export default Profile__info;