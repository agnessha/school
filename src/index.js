import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {addPost} from "./redux/redux";
// import {addTextareaValue} from "./redux/redux"
// import {addMessage} from "./redux/redux";
// import {addTextareaMessageValue} from "./redux/redux";
// import redux, { subscribe} from "./redux/redux";
import store from "./redux/redux-store";
import App from "./App";


export const renderEntireTree = (state) => {
    console.log(store.getState())

    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App
                    getState={store.getState.bind(store)}
                    store={store}
                    profilePage={state.profilePage}
                    dialogData={state.dialogPage.dialogData}
                    messagesData={state.dialogPage.messagesData}
                    friendsData={state.friends.friendsData}
                    dispatch={store.dispatch.bind(store)}
                    textareaMessageValue={state.dialogPage.textareaMessageValue}
                />
            </Router>
        </React.StrictMode>,
        document.getElementById('root')

    );
}
renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
