import {combineReducers, createStore} from 'redux'
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import friendsReducer from "./friendsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    friends: friendsReducer
})

let store = createStore(reducers)
console.log(store)
export default store;