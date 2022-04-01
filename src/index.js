import * as React from 'react'
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
import {Provider} from "react-redux";
import { ChakraProvider } from '@chakra-ui/react'
import {motion} from 'framer-motion/dist/es/index'
import {AnimatePresence, motion1} from 'framer-motion/dist/framer-motion'




export const renderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>

            <Router>
                <Provider store={store}>
                    <ChakraProvider>

                        <App
                            getState={store.getState.bind(store)}
                            store={store}
                            profilePage={state.profilePage}
                            dialogData={state.dialogPage.dialogData}
                            messagesData={state.dialogPage.messagesData}
                            dispatch={store.dispatch.bind(store)}
                            textareaMessageValue={state.dialogPage.textareaMessageValue}
                        />
                    </ChakraProvider>

                </Provider>
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
