
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
        case 'ADD-MESSAGE':
            let newMessage = {
                id: 4,
                text: state.textareaMessageValue,
            }
            state.messagesData.push(newMessage)
            state.textareaMessageValue = "";
            return state;
        case 'ADD-MESSAGE-VALUE':
            state.textareaMessageValue = action.value
            return state;

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

