import React from "react";
import style from './ModalAddItems.module.css'
import {NavLink} from "react-router-dom";

class ModalAddItems extends React.PureComponent{
    constructor(props){
        super(props);
        this.data = props.date.data;
        this.state = {
            typeItems: ''
        }
    }

    _getTypeList() {
        const list = [];
        for(let type in this.data){
            list.push(<option value={`${type}`} key={`${type}`}>{`${type}`}</option>)
        }
        return list
    }

    render() {
        return (
        <div className={style.outsude}>
            <div className={style.window}>
                <NavLink className={style.btnClose} to={'/'}>X</NavLink>
                <div className={style.content}>
                        <form action="POST" onSubmit={(evn)=>{evn.preventDefault()}}>
                            <label htmlFor="styledSelect1" className={style.customSelect}>
                                <select name="options" id="styledSelect1" >
                                    <option value="none" hidden>-</option>
                                    {this._getTypeList()}
                                </select>
                            </label>
                            <label>Ф.И.О.<input type="text"/></label>
                            <label>Отдел<input type="text"/></label>
                            <label>Должность<input type="text"/></label>
                            <label>Кабинет<input type="text"/></label>

                            <label>Зав отдела<input type="checkbox"/></label>

                            <input type="file" name="file" id="file" className={style.inputfile}/>
                            <label htmlFor="file">Выберите фото</label>

                            <button onSubmit={(evn)=>{evn.preventDefault()}}>Создать</button>
                        </form>
                </div>
            </div>
        </div>
    )
    }
}

export default ModalAddItems;