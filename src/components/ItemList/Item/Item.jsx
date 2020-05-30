import React from "react";
import style from './Item.module.css'


const Item = (props) => {
    return (
        <div className={`${style.row} ${style.row_not_even}`} id={props.id}>
            <div>{props.type}</div>
            <div>{props.name}</div>
            <div>{props.inventory}</div>
            <div>{props.system}</div>
        </div>
    )
};

export default Item;
