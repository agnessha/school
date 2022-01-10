import React from 'react';
import s from './Users.module.css';
import avatarImg from '../../img/avatar.svg';
import preloader from '../../img/preloader.svg'
import {NavLink} from "react-router-dom";


const Users = (props) => {

    let pagesCount = Math.ceil(props.usersTotalCount / props.pageSize)
    let pages = []
    props.users.map(u => {
        console.log(u)
    })
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }
    console.log(props.users)
    return (
        <div className={s.users}>
            <div>
                {pages.map(p => {

                        if (p === props.currentPage) {
                            return (
                                <button className={s.usersBtnActive}>{p}</button>
                            )
                        }  else {
                            return (
                                <button  value={p} onClick={props.changeCurrentPage.bind({p})} data-value={p} className={s.usersBtn}>{p}</button>
                            )
                        }
                    }
                )}
            </div>
            {
                props.isFetching ? <img src={preloader}/> : ''
            }

            <div className={s.users_title}>
                Users
            </div>
            <div className={s.users__items}>
                {props.users.map(u => {
                    let hrefToProfile = '/profile/'
                    return (
                    <div key={u.id}>
                        <div className={s.user}>
                            <div className={s.user_left}>
                                <div className={s.user_ava}>
                                    <nav>
                                    <NavLink to={hrefToProfile + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : avatarImg} alt=""/>
                                    </NavLink>
                                    </nav>
                                </div>
                                <div className={s.user_status}>
                                    {u.followed ?
                                        <button onClick={() => {
                                            props.unfollow(u.id)
                                        }}>UNFOLLOW</button>
                                        : <button onClick={() => {
                                            props.follow1(u.id)
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
                )})}
            </div>
            <div className={s.users_btn}>
                <button onClick={props.showMoreUsers}>
                    Show more
                </button>
            </div>
        </div>
    )
}

export default Users;