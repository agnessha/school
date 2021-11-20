import React from "react";
import s from './ProfileInfo.module.css';



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


export default Profile__info;