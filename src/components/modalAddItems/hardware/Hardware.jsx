import React from "react";
import style from './Hardware.module.css';

const Hardware = () => {
    return (
        <div className={style.content__Hardware}>
            <div>
                <label><input type="text" placeholder={'Рабочее место сотрудника'}/></label>
                <label><input type="text" placeholder={'Ответственный'}/></label>

                <label><input type="text" placeholder={'Инвентарный'}/></label>
                <label><input type="text" placeholder={'Кабинет'}/></label>
            </div>
            <div>
                <label><input type="text" placeholder={'Наименование'}/></label>
                <label><input type="text" placeholder={'M/N'}/></label>
                <label><input type="text" placeholder={'S/N'}/></label>
                <label><input type="text" placeholder={'P/N'}/></label>
            </div>


        </div>
    )
};

export default Hardware;