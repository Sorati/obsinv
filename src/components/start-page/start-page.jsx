import React from "react";
import addElement from '../../add_element.svg';
import showAllElements from '../../show_element.svg';
import style from './start-page.module.css'
import Card from './card/card'

const StartPage = () => {
    return (
        <div className={style.startPage}>
            <Card
                item_path={'/Add'}
                img_path={addElement}
                img_altDescription={'new elemenst'}
                item_description={'Добавить оборудование'}
            />
            <Card
                item_path={'/AllElements'}
                img_path={showAllElements}
                img_altDescription={'showAllElements'}
                item_description={'Смотреть все'}
            />
        </div>
    )
};

export default StartPage;