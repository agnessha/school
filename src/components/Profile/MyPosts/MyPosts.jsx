import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {AddPostAction, AddPostValueAction} from "../../../redux/profileReducer";


const MyPosts = (props) => {


    let state = props.profilePage
    let newPost = React.createRef();
    let newValue = () => {
        let text = newPost.current.value
        props.textAreaNewValue(text)
        console.log(state.textareaValue)
    }
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
                    <textarea onChange={newValue}
                              ref={newPost}
                              value={props.profilePage.textareaValue}/>
                </div>
                <button onClick={props.createPost} className={s.newPost_btn}>
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