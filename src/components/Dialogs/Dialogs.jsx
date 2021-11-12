import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialog__item = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id} className={s.dialog}>
                {props.name}
            </NavLink>
        </div>
    );
}
const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <Dialog__item name='Vasja' id='1'/>
                <Dialog__item name='Masha' id='2'/>
                <Dialog__item name='Egor' id='3'/>
            </div>
            <div className={s.messages}>
                <Message message='hello'/>
            </div>
        </div>
    );
}

export default Dialogs;