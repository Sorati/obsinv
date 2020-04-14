import React from "react";
import style from './ModalAddItems.module.css'
import {NavLink} from "react-router-dom";

const ModalAddItems = () => {
    return (
        <div className={style.outsude}>
            <div className={style.window}>
                <NavLink className={style.btnClose} to={'/'}>X</NavLink>
                <div className={style.content}>

                    <label htmlFor="styledSelect1" className={style.customSelect}>
                        <select name="options" id="styledSelect1">
                            <option value="">Select an option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>

                            <option value="3">Option 3</option>
                            <option value="4">Option 4</option>
                        </select>
                    </label>

                </div>
            </div>
        </div>
    )
}

export default ModalAddItems;