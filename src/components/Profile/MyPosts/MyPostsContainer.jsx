import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {AddPostAction, AddPostValueAction} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";





const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        postData: state.profilePage.postData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        textAreaNewValue: (text) => {
            let action = AddPostValueAction(text)
            dispatch(action)

        },
        createPost: () => {

            dispatch(AddPostAction())

        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;

