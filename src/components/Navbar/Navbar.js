import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className={s.nav}>
            <div className={s.link}>
                <NavLink to="/profile" className={s.link}
                         activeClassName={s.activeLink}>My Profile</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to="/chat" className={s.link}
                         activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to="/news" className={s.link}
                         activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to="/communies" className={s.link}
                         activeClassName={s.activeLink}>Communities</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to="/music" className={s.link}
                         activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to="/settings" className={s.link}
                         activeClassName={s.activeLink}>Settings</NavLink>
            </div>

        </div>
    )
}

export default Navbar