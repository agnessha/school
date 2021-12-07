import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";


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

        profileReducer(store._state.profilePage, action);
        dialogReducer(store._state.dialogPage, action);
        this.renderEntireTree(this._state)

    }
}

