import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import state from "./state/state";
import 'bootstrap/dist/css/bootstrap.min.css';
import {addPost} from "./state/state";

ReactDOM.render(
  <React.StrictMode>
      <Router>
    <App
        postData={state.profilePage.postData}
        dialogData={state.dialogPage.dialogData}
        messagesData={state.dialogPage.messagesData}
        friendsData={state.friends.friendsData}
        addPost={addPost}
    />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
