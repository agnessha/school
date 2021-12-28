import React from "react";
import s from './UserItem.module.css'
import avatarImg from '../../../img/avatar.svg'

const UserItem = (props) => {

    const changeStatus = () => {
        debugger

        let value = props.status
        let userId = props.id
        props.changeStatus(value,userId)
    }

    return (
        <div className={s.user}>
            <div className={s.user_left}>
                <div className={s.user_ava}>
                    <img src={avatarImg} alt=""/>
                </div>
                <div className={s.user_status}>
                    <button onClick={changeStatus}>
                        {props.status}
                    </button>
                </div>

            </div>
            <div className={s.user_info}>

                <div className={s.user_right_info}>
                    <div className={s.user_name}>
                        {props.name}
                    </div>
                    <div className={s.user_text}>
                        {props.text}
                    </div>
                </div>

                <div className={s.user_location}>
                    <div className={s.user_location_town}>
                        {props.town}
                    </div>
                    <div className={s.user_location_country}>
                        {props.country}
                    </div>
                </div>

            </div>
        </div>

    )
}

export default UserItem;