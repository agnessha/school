
let defaultState = {
    users: [
        {id:1, name: "Ton Lory", status: true,  text: 'Hello', location: {town: 'Riga', country: 'Latvia'} }
    ]
}

const usersReduce = (state = defaultState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                ...state.location,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, status: true, }
                    } else {
                        return u
                    }
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                ...state.location,
                users: state.users.map(u => {
                    if (action.id === u.id){
                        return {...u, status: false}
                    } else {
                        return u
                    }
                })
            }
        case 'SET_USERS':
            return{
                ...state,
                ...state.location,
                users: [...state.users, action.users]
            }
        default:
            return state;
    }

}

export const followAction = (userId) => {
    return ({
        type: 'FOLLOW',
        id: userId
    })
}
export const unfollowAction = (userId) => {
    return ({
        type: 'UNFOLLOW',
        id: userId
    })
}
export const setUsersAction = (users) => {
    return ({
        type: 'SET_USERS',
        users: users
    })
}

export default usersReduce;

