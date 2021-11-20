import React from 'react';
import s from './Dialog.module.css'
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

export default Dialog__item;