import React from "react";
import s from './Header.module.css';
import imageLogo from '../../img/Notes.......png';

const Header = () => {
    return (
        <header className={s.header}>
            <img src={imageLogo} alt=""/>
        </header>
    );
}

export default Header;
