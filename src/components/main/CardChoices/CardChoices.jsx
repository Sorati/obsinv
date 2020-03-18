import React from "react";
import {NavLink} from "react-router-dom";

const CardChoices = (props) => {
    return (
        <div className={props.item_style}>
            <NavLink to={props.item_path} >
                <img
                    src={props.img_path}
                    alt={props.img_altDescription}
                />
            </NavLink>
            <p>{props.item_description}</p>
        </div>
    )
};

export default CardChoices;