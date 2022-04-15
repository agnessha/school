import React from "react";
import s from './Header.module.css';
import imageLogo from '../../img/logo4.png';
import { ChakraProvider } from '@chakra-ui/react'
import {useNavigate, NavLink} from "react-router-dom";
import {userAuthHoc} from "../../hocs/userAuthHoc";



const Header = (props) => {

    let spacing = '10'
    console.log(props.userDataH)
    if (props.userDataH !== null) {
        return (
        <header className={s.header}>
            <img src={imageLogo} alt=""/>
            <div className={s.userData}>
                {props.userDataH !== null ? props.userDataH.fullName : ''}
                <span className={s.logout} onClick={() => {
                    props.logoutThunkCreator()
                }}>
                    Log out
                </span>
            </div>
        </header>
    )
    } else {
        return (
            <header className={s.header}>
                <img src={imageLogo} alt=""/>
                <div className={s.userData}>
                    <NavLink to='/login'>
                        Log in
                    </NavLink>
                </div>
            </header>
        )
    }
}


export default userAuthHoc(Header);
