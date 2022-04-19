import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import NavbarCon from "./components/Navbar/Navbar";
import Profile from "./components/Profile/ProfileContainer";
import Dialogs from "./components/Dialogs/Dialogs";
import {
    BrowserRouter as Router,
    Route, Routes, useParams
} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainerFun from "./components/Users/UserContainerFun";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Login/Login";


const App = (props) => {
    return (
        <div className={props.store.getState().usersPage.isFetching ? 'dark' : ''}>
        <HeaderContainer store={props.store}/>
            <div className='app-wrapper'>

                <NavbarCon friendsData={props.friendsData}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/login' element={<LoginContainer />} />
                        <Route path='/profile/:userId' element={<ProfileContainer store={props.store}/>}/>
                        <Route path='/dialogs' element={<DialogsContainer store={props.store}/>}/>
                        <Route path='/news' element={<News />}/>
                        <Route path='/music' element={<Music />}/>
                        <Route path='/users' element={<UsersContainerFun store={props.store}/>}/>
                        <Route path='/settings' element={<Settings />}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}




export default App;
