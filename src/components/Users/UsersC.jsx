import React from 'react';
import s from './Users.module.css';
import avatarImg from '../../img/avatar.svg';
import preloader from '../../img/preloader.svg'
import {NavLink} from "react-router-dom";
import {UsersApi} from "../../api/api";

const Users = (props) => {
    console.log(props)

    let pagesCount = Math.ceil(props.usersTotalCount / props.pageSize)
    let pages = []

    for (let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.users}>

            {
                props.isFetching ? <img src={preloader}/> : ''
            }

            <div className={s.users__items}>
                {props.users.map(u => {
                    let hrefToProfile = '/profile/'
                    console.log(u)
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
                                        <button disabled={props.isFollowing.some(id => id === u.id)} onClick={() => {
                                            props.changeFollowingStatus(true, u.id)
                                            console.log(props.isFollowing)
                                            UsersApi.unfollow(u.id).then((data) => {
                                                if (data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                                props.changeFollowingStatus(false, u.id)
                                            });

                                        }}>UNFOLLOW</button>
                                        : <button disabled={props.isFollowing.some(id => id === u.id)} onClick={() => {

                                            props.changeFollowingStatus(true, u.id)
                                            UsersApi.follow(u.id).then((data) => {
                                                    if (data.resultCode === 0) {
                                                        props.follow1(u.id)
                                                    }
                                                props.changeFollowingStatus(false, u.id)
                                                });

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
                {/*<button onClick={props.showMoreUsers}>*/}
                {/*    Show more*/}
                {/*</button>*/}
            </div>
            <div className={s.usersButtons}>
                {pages.map(p => {
                    if (p ===props.currentPage) {
                        return (
                            <button className={s.usersBtnActive} />
                        )
                    } else{
                        return (
                            <button value={p} onClick={props.changeCurrentPage.bind({p})}
                                    data-value={p}
                                    className={s.usersBtn} />
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Users;