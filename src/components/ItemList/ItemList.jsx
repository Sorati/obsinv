import React from "react";
import style from './ItemList.module.css'
import Item from "./Item/Item";

const ItemList = (props) => {
    const list = props.date.data;

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
                            system={`${item.system}`}
                            name={`${item.user}`}
                            // name={`${item.fullName}`} //person
                            inventory={`${item.inventory}`}
                            // inventory={`${item.location}`} //person
                            key={`${type}${item.id}`}
                        />
                    )
                }
            }
        }
        return items
    }

    function showInfo(){

    }

    return (
        <div className={style.content}>
            <Item
                type={`Тип`}
                system={`Система`}
                name={`Наименование / Имя`}
                inventory={`Инвентарный №`}
            />
            {allList(list)}
        </div>
    )
};

export default ItemList;