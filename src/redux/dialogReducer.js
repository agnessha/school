
let defaultState = {
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
}

const dialogReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            let newMessage = {
                id: 4,
                text: state.textareaMessageValue,
            }
            let copyState = {...state}
            copyState.dialogData = [...state.dialogData]
            copyState.messagesData = [...state.messagesData]
            copyState.messagesData.push(newMessage)
            copyState.textareaMessageValue = "";
            return copyState;
    }
        case 'ADD-MESSAGE-VALUE': {
            let copyState = {...state}
            copyState.textareaMessageValue = action.value
            return copyState;
        }
        default:
            return state;
    }

}

export const addMessageAction = () => {
    return ({
        type: 'ADD-MESSAGE'
    })
}
export const addMessageValueAction = (text) => {
    return ({
        type: 'ADD-MESSAGE-VALUE',
        value: text
    })
}

export default dialogReducer;

