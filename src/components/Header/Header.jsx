import React from "react";
import s from './Header.module.css';
import imageLogo from '../../img/logo4.png';
import { ChakraProvider } from '@chakra-ui/react'
import {useNavigate, NavLink} from "react-router-dom";



const Header = (props) => {
    if (props.userDataH !== null) {
        console.log('not null')
        return (

        <header className={s.header}>
            <img src={imageLogo} alt=""/>
            <div className={s.userData}>
                {props.userDataH.userLogin === undefined ? <NavLink to='/login'>Log in</NavLink> : props.userDataH.userLogin }
            </div>
        </header>
    )
    } else {
        console.log('null')

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

export default Header;
