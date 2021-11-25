import React from 'react';
import s from './Message.module.css'
import {NavLink} from "react-router-dom";


const Message__item = (props) => {
    return (
        <div>
            <div className={s.message}>
                {props.message}
            </div>
        </div>
    );
}

export default Message__item;

