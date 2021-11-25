import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let newPostData = props.postData.map( post => (
        <Post text={post.text} like={post.likeCount} />
    ) )
    let newPost = React.createRef();

    let createPost = () => {
        debugger;
        let text = newPost.current.value;
        props.addPost(text)
    }
    return (
        <div className={s.myPosts}>
            <div className={s.newPosts}>
                <div className={s.newPosts_title}>
                    New post
                </div>
                <div className={s.newPosts_input}>
                    <textarea ref={newPost}></textarea>
                </div>
                <button onClick={createPost} className={s.newPost_btn}>
                    Post
                </button>
            </div>
            <div className="Posts">
                {newPostData}
            </div>
        </div>

    );
}

export default MyPosts;