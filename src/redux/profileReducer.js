import { bindActionCreators } from "redux";

let defaultState = {
    postData: [
        { id: 1, text: "Hello?", likeCount: 1 },
        { id: 2, text: "You are very interesting person!", likeCount: 20 },
    ],
    userData: null,
    status: null,
};

const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD-POST": {
            return {
                ...state,
                postData: [
                    ...state.postData,
                    { id: 5, text: state.textareaValue, likeCount: 2 },
                ],
                textareaValue: "",
            };
        }
        case "ADD-POST-VALUE": {
            return {
                ...state,
                textareaValue: action.value,
            };
        }
        case "USER": {
            return {
                ...state,
                userData: action.userData,
            };
        }
        case "GET_STATUS": {
            return {
                ...state,
                status: action.status,
            };
        }
        default:
            return state;
    }
};

export const AddPostAction = () => {
    return {
        type: "ADD-POST",
    };
};
export const AddPostValueAction = (text) => {
    return {
        type: "ADD-POST-VALUE",
        value: text,
    };
};
export const addUserDataAC = (userData) => {

    return {
        type: "USER",
        userData: userData,
    };
};
export const getStatus = (status) => {
    return {
        type: 'GET_STATUS',
        status: status
    }
}

export default profileReducer;