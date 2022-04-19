import {createSelector} from "reselect";


const getUsersSubSelector = (state) => {
    return state.usersPage.users;
}

export const getUsersSelector = createSelector(getUsersSubSelector, (users) => {
    return users
})