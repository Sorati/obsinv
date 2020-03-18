import React from "react";
import Searcher from "../searcher/Searcher";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = ()=> {
    return(
        <header>
            <NavLink className={style.btn__back} to={'/Main'}>back</NavLink>
            <Searcher />
        </header>
    )
};

export default Header;