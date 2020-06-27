import React from "react";
import {NavLink} from "react-router-dom";
import style from './card.module.css'

const Card = (props) => {
    return (
        <NavLink to={props.item_path}>
            <div className={style.item}>
                <img
                    src={props.img_path}
                    alt={props.img_altDescription}
                />
                <p>{props.item_description}</p>
            </div>
        </NavLink>
    )
};

export default Card;