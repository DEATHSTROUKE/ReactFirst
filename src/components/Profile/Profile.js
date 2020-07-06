import React from "react";
import s from './Profile.module.css'
import Post from "./Post/Post";
import {addPostCreator} from "../../redux/profile-reducer";

const Profile = (props) => {
    let posts = props.state.profileData.posts.map((el) =>
        <Post id={el.id} text={el.text} likesCount={el.likesCount}
              state={props.state} dispatch={props.dispatch}/>)
    let newPostRef = React.createRef()
    const addPost = () => {
        let text = newPostRef.current.value
        props.dispatch(addPostCreator(text))
        newPostRef.current.value = ''
    }
    return (
        <div className={s.profile}>
            <div className={s.header}>
                <div className={s.profile__data}>
                    <img src="https://avatars.mds.yandex.net/get-pdb/2493246/e39def9e-0e6d-406e-9e58-1d1b949158c0/s1200"
                         alt=""
                         className={s.image}/>
                    <div className={s.nik}>
                        Andruxa
                    </div>
                </div>
                <div>
                    <textarea className={s.textarea}
                              placeholder="Что у Вас нового?"
                              ref={newPostRef}></textarea>
                </div>
                <button onClick={addPost} className={s.add_post}>Public</button>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default Profile