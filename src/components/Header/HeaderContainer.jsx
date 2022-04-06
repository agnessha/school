import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getUserDataAC} from "../../redux/authReducer";
import s from "../Profile/Profile.module.css";
import profileImg from "../../img/Landscape-Color.jpg";
import Profile__info from "../Profile/ProfileInfo/ProfileInfo";
import MyPostsContainer from "../Profile/MyPosts/MyPostsContainer";
import {useParams} from "react-router-dom";
import {UsersApi} from "../../api/api";


const HeaderAPI = (props) => {


    let { userId } = useParams()
    useEffect(() => {
        UsersApi.auth().then((data) => {
                props.getUserData(data.data.id,
                    data.data.login,
                    data.data.email)
            });
    }, []);
    return (
        <Header {...props} />
    )
}



let mapStateToProps = (state) => {
    return {
        userDataH: state.auth.userDataH
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getUserData: (id, login, email) => {
            dispatch(getUserDataAC(id, login, email))
        }
    }
}


const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPI)

export default HeaderContainer;