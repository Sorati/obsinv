import React from "react";
import Search from "./search/search";
import style from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = ()=> {
    return(
        <header>
            <NavLink className={style.btn__back} to={'/StartPage'}>back</NavLink>
            <Search />
        </header>
    )
};

export default Header;