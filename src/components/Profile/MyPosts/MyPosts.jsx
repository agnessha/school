import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {AddPostAction, AddPostValueAction} from "../../../redux/profileReducer";


const MyPosts = (props) => {



    let newPost = React.createRef();
    let newValue = () => {
        let text = newPost.current.value
        props.textAreaNewValue(text)
    }


    return (
        <div className={s.myPosts}>
            <div className={s.newPosts}>
                <div className={s.newPosts_title}>
                    New post
                </div>
                <div className={s.newPosts_input}>
                    <textarea onChange={newValue}
                              ref={newPost}
                              value={props.value}/>
                </div>
                <button onClick={props.createPost} className={s.newPost_btn}>
                    Post
                </button>
            </div>
            <div className="Posts">
                {props.newPostData}
            </div>
        </div>

    );
}

export default MyPosts;