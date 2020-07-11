import React from "react";
import s from "./MyPosts.module.css";


const MyPosts = (props) => {
    let newPostRef = React.createRef()
    const onPostChange = () => {
        props.updateNewPostText(newPostRef.current.value)
    }
    const onAddPost = () => {
        props.addPost()
        newPostRef.current.value = ''
    }
    return <div>
        <div>
            <textarea className={s.textarea}
                      placeholder="Что у Вас нового?"
                      ref={newPostRef}
                      onChange={onPostChange}/>
        </div>
        <button onClick={onAddPost} className={s.add_post}>Public</button>
        <div className={s.posts}>
            {props.posts}
        </div>
    </div>
}

export default MyPosts
