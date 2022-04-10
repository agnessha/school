import * as axios from "axios";




const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': "03391890-9da3-4f1e-9d08-aabb95ce5c42"
    }
})

export const UsersApi = {
    getUsers() {
        const axios = require("axios").default;
        return instance.get(`users?count=4`).then(response => response.data)
    },
    changeCurrentPage(value) {

        const axios = require("axios").default;
        return instance.get(`users?count=4&page=` + value).then(response => {
            console.log('DDDDDDDDDDDDDDD' + response.data)
            return response.data
        })

    },
    unfollow(id) {
        const axios = require("axios").default;
        return instance.delete(`follow/` + id).then(response => {
            return response.data
        })
    },
    follow(id) {
        const axios = require("axios").default;
        return instance.post(`follow/` + id).then(response => {
            return response.data
        })
    },
    auth() {
        const axios = require("axios").default;
        return instance.get(`auth/me`).then(response => response.data)
    }
}

export const profileAPI = {
    getStatus(id) {
        const axios = require("axios").default;
        return instance.get(`profile/status/` + id).then(response => response.data)
    },
    updateStatus(status) {

        const axios = require("axios").default;
        return instance.put(`profile/status`, {
            status: status
        }).then(response => {
            return response.data
        })
    },
    login(userData) {
        const axios = require("axios").default;
        return instance.post(`auth/login`, {userData}).then(response => {
            return response.data
        })
    }
}



