import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {AddPostAction, AddPostValueAction} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {


    let textAreaNewValue = (text) => {
        let action = AddPostValueAction(text)
        props.store.dispatch(action)
    }
    let createPost = () => {
        let action = AddPostAction();
        props.store.dispatch(action)
    }
    let newPostData = props.store.getState().profilePage.postData.map( post => (
        <Post text={post.text} like={post.likeCount} />
    ) )
    let value = props.store.getState().profilePage.textareaValue

    return (
        <MyPosts
        textAreaNewValue={textAreaNewValue}
        createPost={createPost}
        newPostData={newPostData}
        value={value}
        />

    );
}

export default MyPostsContainer;