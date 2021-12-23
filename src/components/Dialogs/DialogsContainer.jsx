import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message__item from "./Message/Message";
import Dialog__item from "./Dialog/Dialog";
import Button from 'react-bootstrap/Button';
import {Col} from "react-bootstrap";
import {addMessageAction, addMessageValueAction} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

//
// const DialogsContainer = (props) => {
//
//
//
//
//     let sendMessageAction = () => {
//         let action = addMessageAction()
//         props.store.dispatch(action)
//     }
//     let changeValueAction = (text) => {
//         let action = addMessageValueAction(text)
//         props.store.dispatch(action)
//     }
//     let value = props.store.getState().dialogPage.textareaMessageValue
//     console.log(props)
//     return (
//         <Dialogs
//             sendMessage={sendMessageAction}
//             changeValue={changeValueAction}
//             value={value}
//         />
//     );
// }

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)



export default DialogsContainer;