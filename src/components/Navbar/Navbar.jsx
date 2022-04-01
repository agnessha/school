import React, {useEffect} from "react";
import s from './Navbar.module.css';
import {useNavigate, NavLink} from "react-router-dom";
import homePage from "../../img/home.png"
import dialogImg from "../../img/dialog.png"
import newsImg from "../../img/megaphone.png"
import musicImg from "../../img/musical-note.png"
import settingImg from "../../img/setting.png"
import userImg from '../../img/user.png'
import {connect} from "react-redux";
import { Box, Text, Flex, Image } from '@chakra-ui/react'



const Navbar = (props) => {
    const navigate = useNavigate();


    console.log(props)
    console.log(props.userData)
    let hrefToLogin = '/login'
    let href = '/profile/'
    return (
        <div>
        {/*<nav className={s.nav}>*/}
        {/*    <div className={s.navbarLink}>*/}
        {/*        <NavLink to={props.userData === null || props.userData.userId === undefined? hrefToLogin : href + props.userData.userId} activeClassName={s.active}>*/}
        {/*            <img className={s.icon} src={homePage} alt=""/>*/}
        {/*            Profile</NavLink>*/}
        {/*    </div>*/}
        {/*    <div className={s.navbarLink}>*/}
        {/*        <NavLink to='/dialogs'>*/}
        {/*            <img className={s.icon} src={dialogImg} alt=""/>*/}
        {/*            Dialogs</NavLink>*/}
        {/*    </div>*/}
        {/*    <div className={s.navbarLink}>*/}
        {/*        <NavLink to='/news'>*/}
        {/*            <img className={s.icon} src={newsImg} alt=""/>*/}
        {/*            News</NavLink>*/}
        {/*    </div>*/}
        {/*    <div className={s.navbarLink}>*/}
        {/*        <NavLink to='/music' >*/}
        {/*            <img className={s.icon} src={musicImg} alt=""/>*/}
        {/*            Music</NavLink>*/}
        {/*    </div>*/}
        {/*    <div className={s.navbarLink}>*/}
        {/*        <NavLink to='/users' >*/}
        {/*            <img className={s.icon} src={userImg} alt=""/>*/}
        {/*            Users</NavLink>*/}
        {/*    </div>*/}
        {/*    <div className={s.navbarLink}>*/}
        {/*        <NavLink to='/settings'>*/}
        {/*            <img className={s.icon} src={settingImg} alt=""/>*/}
        {/*            Settings</NavLink>*/}
        {/*    </div>*/}



        {/*</nav>*/}
            <Box margin='77px 0 '>
                <Box>
                    <NavLink to={props.userData === null || props.userData.userId === undefined? hrefToLogin : href + props.userData.userId}>
                        <Flex>
                        <Image margin='auto 0'  className={s.icon} src={homePage} alt=""/>
                        <Text className={s.text}>
                            Profile
                        </Text>
                        </Flex>
                        </NavLink>
                </Box>
                <Box>
                    <NavLink to='/dialogs'>
                        <Flex>
                            <Image margin='auto 0'  className={s.icon} src={dialogImg} alt=""/>
                            <Text className={s.text}>
                                Dialogs
                            </Text>
                        </Flex>
                    </NavLink>
                </Box>
                <Box>
                    <NavLink to='/news'>
                        <Flex>
                            <Image margin='auto 0'  className={s.icon} src={newsImg} alt=""/>
                            <Text className={s.text}>
                                News
                            </Text>
                        </Flex>
                    </NavLink>
                </Box>
                <Box>
                    <NavLink to='/music'>
                        <Flex>
                            <Image margin='auto 0'  className={s.icon} src={musicImg} alt=""/>
                            <Text className={s.text}>
                                Music
                            </Text>
                        </Flex>
                    </NavLink>
                </Box>
                <Box>
                    <NavLink to='/users'>
                        <Flex>
                            <Image margin='auto 0'  className={s.icon} src={userImg} alt=""/>
                            <Text className={s.text}>
                                Users
                            </Text>
                        </Flex>
                    </NavLink>
                </Box>
                <Box>
                    <NavLink to='/settings'>
                        <Flex>
                            <Image margin='auto 0'  className={s.icon} src={settingImg} alt=""/>
                            <Text className={s.text}>
                                Settings
                            </Text>
                        </Flex>
                    </NavLink>
                </Box>
            </Box>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        userData: state.auth.userDataH
    }
}

let NavbarCon = connect(mapStateToProps, null)(Navbar)

export default NavbarCon;