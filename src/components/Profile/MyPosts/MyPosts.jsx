import React from "react";
import s from './MyPosts.module.css';


const MyPosts = () => {
    return (
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

    );
}

export default Profile ;