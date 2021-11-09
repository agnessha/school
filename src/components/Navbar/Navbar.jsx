import React from "react";
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <a href='/profile' className={s.active}>Profile</a>
            </div>
            <div>
                <a href='/dialogs'>Dialogs</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;