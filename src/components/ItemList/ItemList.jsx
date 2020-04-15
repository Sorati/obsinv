import React from "react";
import style from './ItemList.module.css'
import Item from "./Item/Item";

const ItemList = (props) => {
    const list = props.date.data;

    // console.log(list);
    // console.log(list.pc[0].type);

    function allList(list) {
        let items = [];
        for (let type in list) {
            const listElement = list[type];
            if (type !== 'person') {
                for (let item of listElement) {
                    // console.log(type)
                    items.push(
                        <Item
                            type={`${item.type}`}
                            name={`${item.user}`}
                            inventory={`${item.inventory}`}
                            key={`${type}${item.id}`}
                        />
                    )
                }
            }
        }
        return items
    }

    // let qqq = allList(list);
    // console.log(qqq);

    return (
        <div className={style.content}>

            <Item type={'type'} name={'user'} inventory={'inventory'}/>

            {allList(list)}
            {/*<Item type={list.pc[0].type} user={list.pc[0].user} inventory={list.pc[0].inventory}/>*/}
        </div>
    )
};

export default ItemList;