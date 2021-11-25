import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message__item from "./Message/Message";
import Dialog__item from "./Dialog/Dialog";
import Button from 'react-bootstrap/Button';
import {Col} from "react-bootstrap";


const Dialogs = (props) => {


    let newMessagesData = props.messagesData.map(message => (
        <Message__item message={message.text}/>
    ))

    let newDialogData = props.dialogData.map(dialog => (
        <Dialog__item name={dialog.name} id={dialog.id}/>
    ));
    let messageTextLink = React.createRef();

    let sendMessage = () => {
        let messageText = messageTextLink.current.value;
        alert(messageText)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {newDialogData}
            </div>
            <div className={s.messages}>
                {newMessagesData}
                <div className={s.sendMessage}>
                <textarea ref={messageTextLink}></textarea>
                <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}



export default Dialogs;