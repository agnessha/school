
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
            let newPost = {
                id: 5,
                text: state.textareaValue,
                likeCount: 2,

            }
            let copyState = {...state}
            copyState.postData = [...state.postData]
            copyState.postData.push(newPost);
            copyState.textareaValue = "";
            return copyState;
        }
        case 'ADD-POST-VALUE': {
            let copyState = {...state}
            copyState.textareaValue = action.value
            return copyState;
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