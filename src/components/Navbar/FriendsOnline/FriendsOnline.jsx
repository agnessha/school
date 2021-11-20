import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import homePage from "../../img/home.png"
import dialogImg from "../../img/dialog.png"
import newsImg from "../../img/megaphone.png"
import musicImg from "../../img/musical-note.png"

import settingImg from "../../img/setting.png"


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.navbarLink}>
                <NavLink to='/' activeClassName={s.active}>
                    <img className={s.icon} src={homePage} alt=""/>
                    Profile</NavLink>
                {console.log(s.nav)}
            </div>
            <div className={s.navbarLink}>
                <NavLink to='/dialogs'>
                    <img className={s.icon} src={dialogImg} alt=""/>
                    Dialogs</NavLink>
            </div>
            <div className={s.navbarLink}>
                <NavLink to='/news'>
                    <img className={s.icon} src={newsImg} alt=""/>
                    News</NavLink>
            </div>
            <div className={s.navbarLink}>
                <NavLink to='/music' >
                    <img className={s.icon} src={musicImg} alt=""/>
                    Music</NavLink>
            </div>
            <div className={s.navbarLink}>
                <NavLink to='/settings'>
                    <img className={s.icon} src={settingImg} alt=""/>
                    Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;