import React from "react";
import Post from "./Post/Post";
import {addPostAC, updateNewPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import store from "../../../redux/redux-store";


const mapStateToProps = (state) => {
    let posts = state.profileData.posts.map((el) =>
        <Post id={el.id} text={el.text} likesCount={el.likesCount}
              state={state} dispatch={store.dispatch}/>)
    return {
        posts: posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer
