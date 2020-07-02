import React from "react";
import s from './Header.module.css'

const Header = (props) => {
    return (
        <div className={s.header}>
            <img src="https://static.wixstatic.com/media/8629a1_502f37063ebc4e1da70771ab75c2ce72~mv2_d_1455_1454_s_2.png" alt=""
                 className={s.image}/>
        </div>
    )
}

export default Header