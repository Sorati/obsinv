import React from "react";
import style from './hardware.module.css';

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
                <label><input type="text" placeholder={'Процессор'}/></label>
                <label><input type="text" placeholder={'Оперативная память'}/></label>
                <label><input type="text" placeholder={'Объем жесткого диска'}/></label>
                <label><input type="text" placeholder={'Имя компьютера в теся'}/></label>
                <label><input type="text" placeholder={'IP адрес'}/></label>
                <label><input type="text" placeholder={'Операционная система'}/></label>
                {/*<label><input type="text" placeholder={'Доступ в интерент'}/></label>*/}
                <label className={style.checkbox}><input type="checkbox"/>
                <span>Доступ в интерент</span></label>
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