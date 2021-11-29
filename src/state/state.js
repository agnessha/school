let renderEntireTree = () => {

}


let state = {
    profilePage: {
        postData: [
            {id: 1, text: "Hello?", likeCount: 1},
            {id: 2, text: "You are very interesting person!", likeCount: 20}
        ],
        textareaValue: ""
    },
    dialogPage: {
        dialogData: [
            {id: 1, name: 'Vasja'},
            {id: 2, name: 'Masha'},
            {id: 3, name: 'Egor'},
            {id: 4, name: 'Vasja'},
        ],
        messagesData: [
            {id: 1, text: 'hello'},

        ],
        textareaMessageValue: ""
    },
    friends: {
        friendsData: [
            {id: 1, name: "Petja"},
            {id: 2, name: "Katja"}
        ]
    }
}

window.state = state;
export let addMessage = () => {
    let newMessage = {
        id: 4,
        text: state.dialogPage.textareaMessageValue,
    }
    state.dialogPage.messagesData.push(newMessage)
    renderEntireTree(state)
}
export let addTextareaMessageValue = (value) => {
    state.dialogPage.textareaMessageValue = value
    renderEntireTree(state)
}
 export let addPost = () => {
    let newPost = {
        id: 5,
        text: state.profilePage.textareaValue,
        likeCount: 2,

    }
    state.profilePage.postData.push(newPost);
     state.profilePage.textareaValue = "";
    renderEntireTree(state);
}
export let addTextareaValue = (value) => {
    state.profilePage.textareaValue = value
    renderEntireTree(state);

}

export let subscribe = (observer) => {
    renderEntireTree = observer
}

export default state;