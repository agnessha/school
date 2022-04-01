import React from "react";
import s from './Header.module.css';
import imageLogo from '../../img/logo.png';
import { ChakraProvider } from '@chakra-ui/react'


const Header = (props) => {
    if (props.userDataH !== null) {
        return (

        <header className={s.header}>
            {/*<img src={imageLogo} alt=""/>*/}
            Подарите логотип пж
            <div className={s.userData}>
                {props.userDataH.userLogin}
            </div>
        </header>
    )
    } else {
        return (
            <header className={s.header}>
                {/*<img src={imageLogo} alt=""/>*/}
                Подарите логотип пж
                <div className={s.userData}>

                </div>
            </header>
        )
    }

}

export default Header;
