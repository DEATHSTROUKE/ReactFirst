import React from "react";
import s from './Header.module.css'
import logo from '../../data/img/logo1.png'

const Header = (props) => {
    return (
        <div className={s.bg}>
            <div className={s.header}>
                <img src={logo} className={s.image}/>
            </div>
        </div>
    )
}

export default Header