import React from "react";
import s from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <div className={s.header}>
                <img src="https://avatars.mds.yandex.net/get-pdb/2493246/e39def9e-0e6d-406e-9e58-1d1b949158c0/s1200"
                     alt=""
                     className={s.image}/>
                <div className={s.nik}>
                    Chuvak
                </div>
            </div>
            <div className={s.posts}>
                <div className={s.post}>
                    First post
                </div>
                <div className={s.post}>
                    Second post
                </div>
                <div className={s.post}>
                    Third post
                </div>
            </div>
        </div>
    )
}

export default Profile