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
import {UsersApi} from "../../api/api";
import {addUserDataAC} from "../../redux/profileReducer";
import {getUserDataAC} from "../../redux/authReducer";




const Navbar = (props) => {

    useEffect(() => {
        UsersApi.auth().then((data) => {
            console.log(data)
            props.getUserData(data.data.id,
                data.data.login,
                data.data.email)
        })
    }, [])
    const navigate = useNavigate();


    let hrefToLogin = '/login'
    let href = '/profile/'
    console.log(props.userDataH)
    return (
        <div>
            <Box margin='77px 0 '>
                <Box>
                        <NavLink to={props.userDataH === null || props.userDataH.userId === undefined ? '/login' : href + props.userDataH.userId}>
                        <Flex>
                        <Image margin='auto 0'  className={s.icon} src={homePage} alt=""/>
                        <Text className={s.text}>
                            Profile
                        </Text>
                        </Flex>
                        </NavLink>
                </Box>
                <Box>
                    <NavLink to={props.userData === null || props.userData.userId === undefined? hrefToLogin : '/dialogs'}>
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
        userData: state.profilePage.userData,
        userDataH: state.auth.userDataH
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

        getUserData: (id, login, email) => {
            dispatch(getUserDataAC(id, login, email))
        }
    }
}

let NavbarCon = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarCon;