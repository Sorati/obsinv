import React from "react";
import style from './ItemList.module.css'
import Item from "./Item/Item";

const ItemList = (props) => {
    const list = props.date.data;



    // console.log(list.pc[0].type);
    return (
        <div className={style.content}>
            <Item type={'type'} user={'user'} inventory={'inventory'}/>
        </div>
    )
};

export default ItemList;