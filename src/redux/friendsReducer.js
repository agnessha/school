
let defaultState = {
    friendsData: [
        {id: 1, name: "Petja"},
        {id: 2, name: "Katja"}
    ]
}

const friendsReducer = (state = defaultState, action) => {
    return state;
}

export default friendsReducer;