import React from "react";
import style from './ItemList.module.css'
import Item from "./Item/Item";

const ItemList = (props) => {
    const list = props.date.data;

    console.log(list);
    console.log(list.pc[0].type);

    function allList(list) {
        let items = [];
        for (let type in list) {
            const listElement = list[type];
            for (let item of listElement){
                // console.log(item.user)
                items.push(<Item type={`${item.type}`} user={`${item.user}`} inventory={`${item.inventory}`} />)  //нужен KEY
            }
        }
        return items
    }

    let qqq = allList(list);
    console.log(qqq);

    return (
        <div className={style.content}>

            <Item type={'type'} user={'user'} inventory={'inventory'}/>

            {allList(list)}
            {/*<Item type={list.pc[0].type} user={list.pc[0].user} inventory={list.pc[0].inventory}/>
            <Item type={list.pc[1].type} user={list.pc[1].user} inventory={list.pc[1].inventory}/>
            <Item type={list.pc[2].type} user={list.pc[2].user} inventory={list.pc[2].inventory}/>

            <Item type={list.monitor[0].type} user={list.monitor[0].user} inventory={list.monitor[0].inventory}/>
            <Item type={list.monitor[1].type} user={list.monitor[1].user} inventory={list.monitor[1].inventory}/>
            <Item type={list.monitor[2].type} user={list.monitor[2].user} inventory={list.monitor[2].inventory}/>

            <Item type={list.pc[0].type} user={list.pc[0].user} inventory={list.pc[0].inventory}/>
            <Item type={list.pc[1].type} user={list.pc[1].user} inventory={list.pc[1].inventory}/>
            <Item type={list.pc[2].type} user={list.pc[2].user} inventory={list.pc[2].inventory}/>

            <Item type={list.mouse[0].type} user={list.mouse[0].user} inventory={list.mouse[0].inventory}/>
            <Item type={list.mouse[1].type} user={list.mouse[1].user} inventory={list.mouse[1].inventory}/>
            <Item type={list.mouse[2].type} user={list.mouse[2].user} inventory={list.mouse[2].inventory}/>

            <Item type={list.keyboard[0].type} user={list.keyboard[0].user} inventory={list.keyboard[0].inventory}/>
            <Item type={list.keyboard[1].type} user={list.keyboard[1].user} inventory={list.keyboard[1].inventory}/>
            <Item type={list.keyboard[2].type} user={list.keyboard[2].user} inventory={list.keyboard[2].inventory}/>*/}
        </div>
    )
};

export default ItemList;