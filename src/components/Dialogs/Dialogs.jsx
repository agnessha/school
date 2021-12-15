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


    let changeValue = () => {
        let text = messageTextLink.current.value
        props.changeValue(text)
    }
    console.log(props)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items  }>
                {props.newDialogData}
            </div>
            <div>
            <div className={s.messages}>
                {props.newMessagesData}
            </div>
            <div className={s.sendMessage}>
                <textarea ref={messageTextLink}
                          onChange={changeValue}
                          value={props.value} />
                <button onClick={props.sendMessage}>Send</button>
            </div>
            </div>
        </div>
    );
}



export default Dialogs;