import React from "react";
import style from './person.module.css'

const Person = () => {
    return (
        <div className={style.content__person}>
            <label><input type="text" placeholder={'Ф.И.О.'}/></label>
            <label><input type="text" placeholder={'Отдел'}/></label>
            <label><input type="text" placeholder={'Должность'}/></label>
            <label><input type="text" placeholder={'Кабинет'}/></label>
            <label className={style.checkbox}><input type="checkbox"/>
                <span>Зав отдела</span></label>
        </div>
    )
};

export default Person;