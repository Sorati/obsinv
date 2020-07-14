import React from "react";
import SearchContainer from "./search/searchContainer";
import style from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = ()=> {
    return(
        <header>
            <NavLink className={style.btn__back} to={'/StartPage'}>back</NavLink>
            <SearchContainer />
        </header>
    )
};

export default Header;