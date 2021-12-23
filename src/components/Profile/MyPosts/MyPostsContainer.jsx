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

// const MyPostsContainer = (props) => {
//
//
//     let textAreaNewValue = (text) => {
//         let action = AddPostValueAction(text)
//         store.dispatch(action)
//     }
//     let createPost = () => {
//         let action = AddPostAction();
//         store.dispatch(action)
//     }
//
//     let profilePage = props.store.getState().profilePage
//     let value = props.store.getState().profilePage.textareaValue
//
//     return (
//         <MyPosts
//         textAreaNewValue={textAreaNewValue}
//         createPost={createPost}
//         profilePage={profilePage}
//
//         />
//
//     );
// }