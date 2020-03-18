import React from "react";
import style from './Item.module.css'

const Item = (props) => {
    return (
        <div className={`${style.row} ${style.row_not_even}`}>
            <div className="type">{props.type}</div>
            <div className="user">{props.user}</div>
            <div className="inventory">{props.inventory}</div>
        </div>
    )
};

export default Item;