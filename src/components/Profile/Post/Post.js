import React from "react";
import s from './Post.module.css'
import 'font-awesome/css/font-awesome.min.css';
import {setLikeCreator} from "../../../redux/profile-reducer";

const Post = (props) => {
    const setLike = (e) => {
        let id = parseInt(e.target.getAttribute('btnId'))
        props.dispatch(setLikeCreator(id))
    }

    return (
        <div className={s.post}>
            <div>
                {props.text}
            </div>
            <div className={s.rating}>
                <button onClick={setLike}
                        className={s.like}><i className={`fa fa-heart`}
                                              btnId={props.id}></i></button>
                <span className={s.likes_count}>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post