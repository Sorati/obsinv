import React from "react";
import style from './properties-bar.module.css'

const PropertiesBar = (props)=> {

    const handleHide = (event) => {
        props.hideSidebar();
        event.preventDefault();
    }

    return(
        <aside  className={`${style.sidebar}`}>
            <form action="POST">
                <button
                    className={style.btnClose}
                    type={'button'}
                    onClick={handleHide}
                >×</button>
                {/*<label>ФИО птльзователя:<input type="text"/></label>
                <label>Ответственное лицо:<input type="text"/></label>
                <label>Кабинет<input type="text"/></label>

                <label>Тип устройства:<input type="text"/></label>

                <label>Фото:<input type="text"/></label>
                если не ПК
                <label>Производитель<input type="text"/></label>
                <label>Модель:<input type="text"/></label>
                <label>Серийный номер (s/n):<input type="text"/></label>
                <label>Модельный номер (m/n):<input type="text"/></label>
                <label>Уникальный номер (p/n):<input type="text"/></label>
                если ПК
                <label>Процессор:<input type="text"/></label>
                <label>Оперативная память:<input type="text"/></label>
                <label>Жесткий диск:<input type="text"/></label>
                <label>Графический адаптер:<input type="text"/></label>
                <label>IP адрес:<input type="text"/></label>
                <label>Имя компьютера в сети:<input type="text"/></label>
                <label>Доступ в интернет:<input type="text"/></label>
                <label>Специальное ПО:<input type="text"/></label>

                <label>Операционна система:<input type="text"/></label>
                <label>Версия:<input type="text"/></label>

                <label>Описание:<input type="text"/></label>
                <label>Инвентарный номер:<input type="text"/></label>*/}
            </form>
        </aside >
    )
};

export default PropertiesBar;
