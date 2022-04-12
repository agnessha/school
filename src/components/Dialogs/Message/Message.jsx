import React from 'react';
import s from './Message.module.css'


const Message__item = (props) => {
    return (
        <div className={s.messageItem}>

            <div className={s.avaMessage}>
                <img src="https://klike.net/uploads/posts/2020-04/1587719791_1.jpg" alt=""/>
            </div>
            <div className={s.message}>
                {props.message}
            </div>
        </div>
    );
}

export default Message__item;

