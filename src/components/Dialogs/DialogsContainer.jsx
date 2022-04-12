import React from 'react';
import {addMessageAction, addMessageValueAction} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {userAuthHoc} from "../../hocs/userAuthHoc";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        textareaMessageValue: state.textareaMessageValue
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addMessageAction())
        },
        changeValue: (text) => {
            let action = addMessageValueAction(text)
            dispatch(action)
        }
    }
}




export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    userAuthHoc
)(Dialogs);