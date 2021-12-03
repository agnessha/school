


export let store = {
    _state: {
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
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this.renderEntireTree = observer
    },
    renderEntireTree() {
        console.log('State changed')
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                text: this._state.profilePage.textareaValue,
                likeCount: 2,

            }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.textareaValue = "";
            console.log(this._state.profilePage.textareaValue)
            this.renderEntireTree(this._state);
        } else if (action.type === 'ADD-POST-VALUE') {
            this._state.profilePage.textareaValue = action.value
            this.renderEntireTree(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                text: this._state.dialogPage.textareaMessageValue,
            }
            this._state.dialogPage.messagesData.push(newMessage)
            this._state.dialogPage.textareaMessageValue = "";
            this.renderEntireTree(this._state)
        } else if (action.type === 'ADD-MESSAGE-VALUE') {
            this._state.dialogPage.textareaMessageValue = action.value
            this.renderEntireTree(this._state)
        }
    }
}


// let state = {
//     profilePage: {
//         postData: [
//             {id: 1, text: "Hello?", likeCount: 1},
//             {id: 2, text: "You are very interesting person!", likeCount: 20}
//         ],
//         textareaValue: ""
//     },
//     dialogPage: {
//         dialogData: [
//             {id: 1, name: 'Vasja'},
//             {id: 2, name: 'Masha'},
//             {id: 3, name: 'Egor'},
//             {id: 4, name: 'Vasja'},
//         ],
//         messagesData: [
//             {id: 1, text: 'hello'},
//
//         ],
//         textareaMessageValue: ""
//     },
//     friends: {
//         friendsData: [
//             {id: 1, name: "Petja"},
//             {id: 2, name: "Katja"}
//         ]
//     }
// }
// export let addMessage = () => {
//     let newMessage = {
//         id: 4,
//         text: state.dialogPage.textareaMessageValue,
//     }
//     state.dialogPage.messagesData.push(newMessage)
//     renderEntireTree(state)
// }
// export let addTextareaMessageValue = (value) => {
//     state.dialogPage.textareaMessageValue = value
//     renderEntireTree(state)
// }
//  export let addPost = () => {
//     let newPost = {
//         id: 5,
//         text: state.profilePage.textareaValue,
//         likeCount: 2,
//
//     }
//     state.profilePage.postData.push(newPost);
//      state.profilePage.textareaValue = "";
//     renderEntireTree(state);
// }
// export let addTextareaValue = (value) => {
//     state.profilePage.textareaValue = value
//     renderEntireTree(state);
//
// }

// export let subscribe = (observer) => {
//     renderEntireTree = observer
// }

// export default state;