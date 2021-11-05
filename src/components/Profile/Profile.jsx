import React from "react";
import s from './Profile.module.css';
import profileImg from '../../img/Landscape-Color.jpg'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={profileImg} alt=""/>
            </div>
            <div>
                <div className={s.profile_info}>
                <div className={s.ava}>
                    <img src="https://klike.net/uploads/posts/2020-04/1587719791_1.jpg" alt=""/>
                </div>
                <div className={s.description}>
                    Hey, lol, i don't know what i need to write here ;)

                </div>
                </div>
                <div className={s.myPosts}>
                    <div className={s.newPosts}>
                        <div className={s.newPosts_title}>
                            New post
                        </div>
                        <div className={s.newPosts_input}>
                            <input type="text"/>
                        </div>
                        <div className={s.newPost_btn}>
                            Post
                        </div>
                    </div>
                        <div className={s.post}>
                            post
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Profile ;