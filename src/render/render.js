import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import reportWebVitals from '../reportWebVitals';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "../App";
import {addPost} from "../state/state";
import {addTextareaValue} from "../state/state"
import {addMessage} from "../state/state";
import {addTextareaMessageValue} from "../state/state";

export const renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App
                    profilePage={state.profilePage}
                    dialogData={state.dialogPage.dialogData}
                    messagesData={state.dialogPage.messagesData}
                    friendsData={state.friends.friendsData}
                    addPost={addPost}
                    addTextareaValue={addTextareaValue}
                    addMessage={addMessage}
                    textareaMessageValue={state.dialogPage.textareaMessageValue}
                    addTextareaMessageValue={addTextareaMessageValue}
                />
            </Router>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

