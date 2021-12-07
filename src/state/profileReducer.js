

const profileReducer = (state, action) => {

    switch (action.type){
        case 'ADD-POST':
            let newPost = {
                id: 5,
                text: state.textareaValue,
                likeCount: 2,

            }
            state.postData.push(newPost);
            state.textareaValue = "";
            return state;
        case 'ADD-POST-VALUE':
            state.textareaValue = action.value
            return state;
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