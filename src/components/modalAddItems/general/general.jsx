import React from "react";
import style from "./general.module.css"

const General = () => {
    return (
        <div className={style.content__general}>
            <input type="file" name="file" id="file" className={style.inputfile}/>
            <label htmlFor="file">Выберите фото</label>

            <label><textarea name="description" rows="10" placeholder={'Описание'}></textarea></label>

            <button>Тык</button>
        </div>
    )
};

export default General