import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {addPost} from "./state/state";
// import {addTextareaValue} from "./state/state"
// import {addMessage} from "./state/state";
// import {addTextareaMessageValue} from "./state/state";
// import state, { subscribe} from "./state/state";
import {store} from "./state/state";
import App from "./App";


export const renderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App
                    profilePage={state.profilePage}
                    dialogData={state.dialogPage.dialogData}
                    messagesData={state.dialogPage.messagesData}
                    friendsData={state.friends.friendsData}
                    addPost={store.addPost.bind(store)}
                    addTextareaValue={store.addTextareaValue.bind(store)}
                    addMessage={store.addMessage.bind(store)}
                    textareaMessageValue={state.dialogPage.textareaMessageValue}
                    addTextareaMessageValue={store.addTextareaMessageValue.bind(store)}
                />
            </Router>
        </React.StrictMode>,
        document.getElementById('root')

    );
}
renderEntireTree(store.getState());

store.subscribe(renderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
