import React from "react";
import style from './Computer.module.css';

class Computer extends React.PureComponent{
    render() {
        const {CollectValue} = this.props;
        return (
        <div className={style.content__Computer}>
            <div>
                <label><input name={`user`} type="text" placeholder={'Рабочее место сотрудника'} onChange={CollectValue}/></label>
                <label><input name={`responsible`} type="text" placeholder={'Ответственный'} onChange={CollectValue}/></label>
                <label><input name={`inventory`} type="text" placeholder={'Инвентарный'} onChange={CollectValue}/></label>
                <label><input name={`location`} type="text" placeholder={'Кабинет'} onChange={CollectValue}/></label>
                <label><input name={'System'} type="text" placeholder={'Система'} onChange={CollectValue}/></label>
            </div>
            <div>
                <label><input name={`cp`} type="text" placeholder={'Процессор'} onChange={CollectValue}/></label>
                <label><input name={`ram`} type="text" placeholder={'Оперативная память'} onChange={CollectValue}/></label>
                <label><input name={`hdd`} type="text" placeholder={'Объем жесткого диска'} onChange={CollectValue}/></label>
                <label><input name={`graphics`} type="text" placeholder={'Графический адаптер'} onChange={CollectValue}/></label>
                <label><input name={`networkName`} type="text" placeholder={'Имя компьютера в сети'} onChange={CollectValue}/></label>
                <label><input name={`ip`} type="text" placeholder={'IP адрес'} onChange={CollectValue}/></label>
                <label><input name={`os`} type="text" placeholder={'Операционная система'} onChange={CollectValue}/></label>
                <label className={style.checkbox}><input name={`ethernet`} type="checkbox" onChange={CollectValue}/>
                <span>Доступ в интерент</span></label>
            </div>
            <div>
                <label><input name={`manufacture`} type="text" placeholder={'Наименование'} onChange={CollectValue}/></label>
                <label><input name={`ModelName`} type="text" placeholder={'M/N'} onChange={CollectValue}/></label>
                <label><input name={`SerialName`} type="text" placeholder={'S/N'} onChange={CollectValue}/></label>
                <label><input name={`prodName`} type="text" placeholder={'P/N'} onChange={CollectValue}/></label>
            </div>
        </div>
    )
    }
}

export default Computer;