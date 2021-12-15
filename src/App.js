import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {
    BrowserRouter as Router,
    Route, Routes
} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {

    return (
        <div>
        <Header/>
            <div className='app-wrapper'>

                <Navbar friendsData={props.friendsData}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/' element={<Profile store={props.store}
                        />}/>
                        <Route path='/dialogs' element={<DialogsContainer store={props.store}
                            // dialogData={props.dialogData}
                            //                                      messagesData={props.messagesData}
                            //                                      textareaMessageValue={props.textareaMessageValue}
                            //                                      dispatch={props.dispatch}
                        />}/>
                        <Route path='/news' element={<News />}/>
                        <Route path='/music' element={<Music />}/>
                        <Route path='/settings' element={<Settings />}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}




export default App;
