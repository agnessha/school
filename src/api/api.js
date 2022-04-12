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
        return instance.get(`users?count=4`).then(response => response.data)
    },
    changeCurrentPage(value) {
        return instance.get(`users?count=4&page=` + value).then(response => {
            return response.data
        })

    },
    unfollow(id) {
        return instance.delete(`follow/` + id).then(response => {
            return response.data
        })
    },
    follow(id) {
        return instance.post(`follow/` + id).then(response => {
            return response.data
        })
    },
    auth() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}

export const profileAPI = {
    getStatus(id) {
        return instance.get(`profile/status/` + id).then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        }).then(response => {
            return response.data
        })
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => {
            return response.data
        })
    },
    getUserData(userId) {
        return instance.get("https://social-network.samuraijs.com/api/1.0/profile/" + userId).then((response) => {
            return response.data
        });
    }
}



