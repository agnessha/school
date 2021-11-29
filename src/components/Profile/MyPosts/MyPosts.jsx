import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let newPostData = props.profilePage.postData.map( post => (
        <Post text={post.text} like={post.likeCount} />
    ) )
    let newPost = React.createRef();

    let createPost = () => {

        props.addPost()
    }

    let teaxtareaNewValue = () => {

        let text = newPost.current.value;
        props.addTextareaValue(text)
    }


    return (
        <div className={s.myPosts}>
            <div className={s.newPosts}>
                <div className={s.newPosts_title}>
                    New post
                </div>
                <div className={s.newPosts_input}>
                    <textarea onChange={teaxtareaNewValue} ref={newPost} value={props.profilePage.textareaValue}/>
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