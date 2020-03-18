import React from "react";
import addElement from '../../add_element.svg';
import showAllElements from '../../show_element.svg';
import style from './Main.module.css'
import CardChoices from './CardChoices/CardChoices'

const Main = () => {
    return (
        <div className={style.main}>
            <CardChoices
                item_path={'/Add'}
                item_style={style.item}
                img_path={addElement}
                img_altDescription={'new elemenst'}
                item_description={'Добавить оборудование'}
            />
            <CardChoices
                item_path={'/AllElements'}
                item_style={style.item}
                img_path={showAllElements}
                img_altDescription={'showAllElements'}
                item_description={'Смотреть все'}
            />
        </div>
    )
};

export default Main;