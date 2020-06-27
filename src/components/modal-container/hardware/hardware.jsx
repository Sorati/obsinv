import React from "react";
import style from './hardware.module.css';

const Hardware = (props) => {
    const {CollectValue} = props;
    return (
        <div className={style.content__Hardware}>
            <div>
                <label><input name={'user'} type="text" placeholder={'Рабочее место сотрудника'} onChange={CollectValue}/></label>
                <label><input name={'responsible'} type="text" placeholder={'Ответственный'} onChange={CollectValue}/></label>

                <label><input name={'inventory'} type="text" placeholder={'Инвентарный'} onChange={CollectValue}/></label>
                <label><input name={'location'} type="text" placeholder={'Кабинет'} onChange={CollectValue}/></label>
                <label><input name={'System'} type="text" placeholder={'Система'} onChange={CollectValue}/></label>
            </div>
            <div>
                <label><input name={'manufacture'} type="text" placeholder={'Наименование'} onChange={CollectValue}/></label>
                <label><input name={'ModelName'} type="text" placeholder={'M/N'} onChange={CollectValue}/></label>
                <label><input name={'SerialName'} type="text" placeholder={'S/N'} onChange={CollectValue}/></label>
                <label><input name={'prodName'} type="text" placeholder={'P/N'} onChange={CollectValue}/></label>
            </div>
        </div>
    )
};

export default Hardware;
