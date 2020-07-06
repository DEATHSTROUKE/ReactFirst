const ADD_POST = 'ADD-POST'
const SET_LIKE = 'SET-LIKE'

const profileReducer = (state, action) => {
    debugger
    switch (action.type) {
        case ADD_POST: {
            state.posts.push({
                id: state.posts.slice(-1)[0].id + 1,
                text: action.text,
                likesCount: 0
            })
            return state
        }
        case SET_LIKE: {
            let posts = state.posts
            for (let i = 0; i < posts.length; i++) {
                if (posts[i].id === action.id) {
                    posts[i].likesCount += 1
                }
            }
            return state
        }
        default: {
            return state
        }
    }
}

export const addPostCreator = (text) => {
    return {type: ADD_POST, text: text}
}

export const setLikeCreator = (id) => {
    return {type: SET_LIKE, id: id}
}

export default profileReducer
