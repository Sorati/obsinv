import React from "react";
import style from './item-container.module.css'
import Item from "./item/item";

class ItemContainer extends React.PureComponent{
    constructor(props){
        super(props);
        this.list = props.date.data;
        this._allList = this._allList.bind(this);
        // this.handlerChoiceItem = this.handlerChoiceItem.bind(this);
    }

    _allList(list) {
        let items = [];
        for (let type in list) {
            const listElement = list[type];
            if (type !== 'person') {
                for (let item of listElement) {
                    // console.log(item.id);
                    items.push(
                        <Item
                            type={`${item.type}`}
                            system={`${item.system}`}
                            name={`${item.user}`}
                            // name={`${item.fullName}`} //person
                            inventory={`${item.inventory}`}
                            // inventory={`${item.location}`} //person
                            key={`${item.type}${item.id}`}
                            id={`${item.type}${item.id}`}
                        />
                    )
                }
            }
        }
        return items
    }

    handlerChoiceItem(e) {
        if(e.target.parentNode.id) {
            console.log(e.target.parentNode.id)
        }
    }

    render() {
        console.log(this.props)
        return (
            <div className={style.content} onClick={this.handlerChoiceItem}>
                <Item
                    type={`Тип`}
                    system={`Система`}
                    name={`Наименование / Имя`}
                    inventory={`Инвентарный №`}
                />
                {this._allList(this.list)}
            </div>
        )
    }

}

export default ItemContainer;
