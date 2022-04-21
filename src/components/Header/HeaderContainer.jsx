import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getUserDataAC, getUserDataThunkCreator, logoutThunkCreator} from "../../redux/authReducer";
import {useParams} from "react-router-dom";
import {UsersApi} from "../../api/api";


const HeaderAPI = (props) => {
    let { userId } = useParams()
    useEffect(() => {
        props.getUserDataThunkCreator();
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
        },
        getUserDataThunkCreator: () => {dispatch(getUserDataThunkCreator())},
        logoutThunkCreator: () => {dispatch(logoutThunkCreator())}
    }
}


const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPI)

export default HeaderContainer;