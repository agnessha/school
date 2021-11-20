import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message__item from "./Message/Message";
import Dialog__item from "./Dialog/Dialog";



const Dialogs = (props) => {


    let newMessagesData = props.messagesData.map(message => (
        <Message__item message={message.text}/>
    ))

    let newDialogData = props.dialogData.map(dialog => (
        <Dialog__item name={dialog.name} id={dialog.id}/>
    ));
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {newDialogData}
            </div>
            <div className={s.messages}>
                {newMessagesData}
            </div>
        </div>
    );
}


export default Dialogs;