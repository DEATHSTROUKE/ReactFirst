import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostConteiner from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostConteiner/>
        </div>
    )
}

export default Profile