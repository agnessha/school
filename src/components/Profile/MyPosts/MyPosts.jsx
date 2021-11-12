import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


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
            <div className="Posts">
                <Post message="Hello?" like="1"/>
                <Post message="You are very interesting person!" like="20"/>
            </div>
        </div>

    );
}

export default MyPosts;