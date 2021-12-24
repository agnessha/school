import React from "react";
import s from './UserItem.module.css'


const UserItem = (props) => {


    return (
        <div className={s.user}>
        <div className={s.user_left}>
            <div className={s.user_ava}>

            </div>
            <div className={s.user_status}>
                <button >
                    {props.status}
                </button>
            </div>
        </div>
            <div className={s.user_right}>
                <div className={s.user_name}>

                </div>
                <div className={s.user_text}>

                </div>
                <div className={s.user_location}>

                </div>
            </div>
        </div>

    )
}

export default UserItem;