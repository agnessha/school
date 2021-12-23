import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message__item from "./Message/Message";
import Dialog__item from "./Dialog/Dialog";
import Button from 'react-bootstrap/Button';
import {Col} from "react-bootstrap";
import {addMessageAction, addMessageValueAction} from "../../redux/dialogReducer";


const Dialogs = (props) => {


    let messageTextLink = React.createRef();

    let newMessagesData = props.dialogPage.messagesData.map(message => (
        <Message__item message={message.text}/>
    ))


    let newDialogData = props.dialogPage.dialogData.map(dialog => (
        <Dialog__item name={dialog.name} id={dialog.id}/>
    ));

    let changeValue = () => {
        let text = messageTextLink.current.value
        props.changeValue(text)
    }
    console.log(props)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items  }>
                {newDialogData}
            </div>
            <div>
            <div className={s.messages}>
                {newMessagesData}
            </div>
            <div className={s.sendMessage}>
                <textarea ref={messageTextLink}
                          onChange={changeValue}
                          value={props.dialogPage.textareaMessageValue} />
                <button onClick={props.sendMessage}>Send</button>
            </div>
            </div>
        </div>
    );
}



export default Dialogs;