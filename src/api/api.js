import * as axios from "axios";




const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': "6f9e0b57-82fa-4bdc-9e30-6f3544f7b7a2"
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



