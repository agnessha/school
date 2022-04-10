import {applyMiddleware, combineReducers, createStore} from 'redux'
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk  from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer
})

// const store = configureStore({
//     reducer: {
//         profilePage: profileReducer,
//         dialogPage: dialogReducer,
//         usersPage: usersReducer,
//         auth: authReducer
//     }
// })

let store = createStore(reducers , applyMiddleware(thunk))

window.store = store

export default store;