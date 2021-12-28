import React from "react";
import s from './Users.module.css';
import UserItem from "./UserItem/UserItem";

const Users = (props) => {

    let changeStatus = (value, userId) => {
        props.changeStatusAction(value, userId)
    }

    let newUsersData = props.usersPage.users.map(u =>

        <UserItem status={props.checkStatus(u.status)}
                  name={u.name}
                  town={u.location.town}
                  country={u.location.country}
                  text={u.text}
                  id={u.id}
                  changeStatus={changeStatus}

        />
    )


    return (
        <div className={s.users}>
            <div className={s.users_title}>
                Users
            </div>
            <div className={s.users__items}>
                {newUsersData}
            </div>
        </div>
    )
}

export default Users;