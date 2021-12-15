import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message__item from "./Message/Message";
import Dialog__item from "./Dialog/Dialog";
import Button from 'react-bootstrap/Button';
import {Col} from "react-bootstrap";
import {addMessageAction, addMessageValueAction} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {


    let newMessagesData = props.store.getState().dialogPage.messagesData.map(message => (
        <Message__item message={message.text}/>
    ))

    let newDialogData = props.store.getState().dialogPage.dialogData.map(dialog => (
        <Dialog__item name={dialog.name} id={dialog.id}/>
    ));

    let sendMessageAction = () => {
        let action = addMessageAction()
        props.store.dispatch(action)
    }
    let changeValueAction = (text) => {
        let action = addMessageValueAction(text)
        props.store.dispatch(action)
    }
    let value = props.store.getState().dialogPage.textareaMessageValue
    console.log(props)
    return (
        <Dialogs
            newMessagesData={newMessagesData}
            newDialogData={newDialogData}
            sendMessage={sendMessageAction}
            changeValue={changeValueAction}
            value={value}
        />
    );
}



export default DialogsContainer;