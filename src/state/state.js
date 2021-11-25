let state = {
    profilePage: {
        postData: [
            {id: 1, text: "Hello?", likeCount: 1},
            {id: 2, text: "You are very interesting person!", likeCount: 20}
        ],

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
            {id: 2, text: 'kek cheburek'},
            {id: 3, text: 'mem drevnosti'},

        ]
    },
    friends: {
        friendsData: [
            {id: 1, name: "Petja"},
            {id: 2, name: "Katja"}
        ]
    }
}

 export let addPost = (postText) => {
    debugger;
    let newPost = {
        id: 5,
        text: postText,
        likeCount: 2
    }
    state.profilePage.postData.push(newPost);
    debugger;
}

export default state;