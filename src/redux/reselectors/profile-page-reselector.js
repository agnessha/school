import {createSelector} from "reselect";


const getStatusSelector = (state) => {
    return state.profilePage.status
}
export const getStatusSuperSelector = createSelector(getStatusSelector, (status) => {
    return status;
})

const getUserDataSelector = (state) => {
    return state.profilePage.userData
}
export const getUserDataSuperSelector = createSelector(getUserDataSelector, (userData) => {
    return userData;
})

const getUserPhotoSelector = (state) => {
    return state.profilePage.userData
}

export const getUserPhotoSuperSelector = createSelector(getUserPhotoSelector, (userData) => {
    if (userData !== null) {
        return userData.photos.small
    } else {
        return userData
    }
})