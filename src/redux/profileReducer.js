
let defaultState = {
    postData: [
        {id: 1, text: "Hello?", likeCount: 1},
        {id: 2, text: "You are very interesting person!", likeCount: 20}
    ],
    textareaValue: ""
}

const profileReducer = (state = defaultState, action) => {

    switch (action.type){
        case 'ADD-POST': {
            return {
                ...state,
                postData: [...state.postData, {id: 5, text: state.textareaValue, likeCount: 2}],
                textareaValue: ''
            };
        }
        case 'ADD-POST-VALUE': {
            return {
                ...state,
                textareaValue: action.value
            };
        }
        default:
            return state;
    }

}

export const AddPostAction = () => {
    return ({
        type: 'ADD-POST'
    });
}
export const AddPostValueAction = (text) => {

    return ({
        type: 'ADD-POST-VALUE',
        value: text
    });
}

export default profileReducer;