import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let newPostData = props.postData.map( post => (
        <Post text={post.text} like={post.likeCount} />
    ) )
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
                {newPostData}
            </div>
        </div>

    );
}

export default MyPosts;