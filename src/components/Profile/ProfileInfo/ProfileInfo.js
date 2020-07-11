import React from "react";
import s from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return <div>
        <div className={s.header}>
            <div className={s.profile__data}>
                <img src="https://avatars.mds.yandex.net/get-pdb/2493246/e39def9e-0e6d-406e-9e58-1d1b949158c0/s1200"
                     alt=""
                     className={s.image}/>
                <div className={s.nik}>
                    Andruxa
                </div>
            </div>
        </div>
    </div>
}

export default ProfileInfo
