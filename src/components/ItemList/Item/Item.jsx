import React from "react";
import style from './Item.module.css'


const Item = (props) => {
    return (
        <div className={`${style.row} ${style.row_not_even}`}>
            <div>{props.type}</div>
            <div>{props.name}</div>
            <div>{props.inventory}</div>
        </div>
    )
};

export default Item;