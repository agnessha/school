import React from "react";
import s from './Users.module.css';

import {setUsersAction} from "../../redux/usersReducer";
import avatarImg from "../../img/avatar.svg";
import * as axios from "axios";

class Users extends React.Component{
    constructor(props) {
        super(props);
        this.showMoreUsers = this.showMoreUsers.bind(this)
        this.clickNum = 1
        this.changeCurrentPage = this.changeCurrentPage.bind(this)


    }
    showMoreUsers() {
        const axios = require('axios').default;
        this.clickNum = this.clickNum + 1
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users?count=2&page='+this.clickNum)
            .then(
                response => {
                    this.props.setUsersAction(response.data.items)
                }
            );
    }
    changeCurrentPage(event) {
        console.log(event);
        let page = parseInt(event.currentTarget.dataset.value)
        this.props.changePageAction(page)
        const axios = require('axios').default;
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users?count=4&page='+event.currentTarget.dataset.value)
            .then(
                response => {
                    this.props.getUsersAction(response.data.items)
                }
            );
    }
    componentDidMount() {
        const axios = require('axios').default;

            axios
                .get('https://social-network.samuraijs.com/api/1.0/users?count=4')
                .then(
                    response => {
                        console.log('aga ok');
                        this.props.setUsersAction(response.data.items)
                    }
                );

    }

    render() {
        console.log(this.props.users)
        let pagesCount = Math.ceil(this.props.usersTotalCount / this.props.pageSize)
        let pages = []

        for (let i=1; i<=pagesCount; i++) {
            pages.push(i)
            console.log(i)
        }

        return (
        <div className={s.users}>
            <div>
            {pages.map(p => {
                if (p === this.props.currentPage) {
                    return (
                        <button className={s.usersBtnActive}>{p}</button>
                    )
                }  else {
                    return (
                        <button  value={p} onClick={this.changeCurrentPage.bind({p})} data-value={p} className={s.usersBtn}>{p}</button>
                    )
                }
            }
            )}
            </div>
            <div className={s.users_title}>
                Users
            </div>
            <div className={s.users__items}>
                {this.props.users.map(u =>
                    <div key={u.id}>
                        <div className={s.user}>
                            <div className={s.user_left}>
                                <div className={s.user_ava}>
                                    <img src={avatarImg} alt=""/>
                                </div>
                                <div className={s.user_status}>
                                    {u.status ?
                                        <button onClick={() => {
                                            this.props.unfollow(u.id)
                                        }}>UNFOLLOW</button>
                                        : <button onClick={() => {
                                            this.props.follow1(u.id)
                                        }}>FOLLOW</button>}
                                </div>

                            </div>
                            <div className={s.user_info}>

                                <div className={s.user_right_info}>
                                    <div className={s.user_name}>
                                        {u.name}
                                    </div>
                                    <div className={s.user_text}>
                                        {u.text}
                                    </div>
                                </div>

                                <div className={s.user_location}>
                                    <div className={s.user_location_town}>
                                        {u.town}
                                    </div>
                                    <div className={s.user_location_country}>
                                        {u.country}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className={s.users_btn}>
                <button onClick={this.showMoreUsers}>
                    Show more
                </button>
            </div>
        </div>
        )
    }
}

export default Users;