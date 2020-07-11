const ADD_POST = 'ADD-POST'
const SET_LIKE = 'SET-LIKE'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

let initialState = {
    newPostText: '',
    posts: [
        {
            id: 1,
            text: "Hey! that's my first post",
            likesCount: 0
        },
        {
            id: 2,
            text: "Today I'm so happy!",
            likesCount: 0
        },
        {
            id: 3,
            text: "Nice",
            likesCount: 0
        }
    ]
}

const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state, ...state.posts}
    switch (action.type) {
        case ADD_POST: {
            stateCopy.posts.push({
                id: stateCopy.posts.slice(-1)[0].id + 1,
                text: stateCopy.newPostText,
                likesCount: 0
            })
            return stateCopy
        }
        case SET_LIKE: {
            let posts = stateCopy.posts
            for (let i = 0; i < posts.length; i++) {
                if (posts[i].id === action.id) {
                    posts[i].likesCount += 1
                }
            }
            return stateCopy
        }
        case UPDATE_POST_TEXT: {
            stateCopy.newPostText = action.text
            return stateCopy
        }
        default: {
            return stateCopy
        }
    }
}

export const addPostAC = () => {
    return {type: ADD_POST}
}

export const setLikeAC = (id) => {
    return {type: SET_LIKE, id: id}
}

export const updateNewPostAC = (text) => {
    return {type: UPDATE_POST_TEXT, text: text}
}

export default profileReducer
