import React from "react";
import style from './ModalAddItems.module.css'
import {NavLink} from "react-router-dom";
import Person from "./person/person";
import General from "./general/general";
import Hardware from "./hardware/hardware";

class ModalAddItems extends React.PureComponent {
    constructor(props) {
        super(props);
        this.data = props.date.data;
        this.getForm = React.createRef();
        this.state = {
            typeItems: '',
            description: '',

        }
    }

    _getTypeList() {
        const list = [];
        for (let type in this.data) {
            list.push(<option value={`${type}`} key={`${type}`}>{`${type}`}</option>)
        }
        return list
    }

    _isEmpty(valueStr) {
        if (valueStr.length > 0) {
            return valueStr
        } else {
            return '---'
        }
    }
    _addNewPerson() {
        let form = this.getForm.current;
        let newItem = [];
        for (let property of form.querySelectorAll('input')) {
            switch (property.type) {
                case 'checkbox':
                    newItem.push(property.checked);
                    break;
                case  'file': {
                    let valueFile = typeof property.files[0] === 'undefined';
                    newItem.push(valueFile ? 'ᐈ Изображение отсутствует' : property.files[0].name)
                }
                    break;
                case 'text':
                    newItem.push(this._isEmpty(property.value));
                    // if (property.value.length > 0) {
                    //     newItem.push(property.value);
                    // } else {
                    //     newItem.push('---')
                    // }
                    break;
            }
        }
        let textarea = form.querySelector('textarea');

        newItem.push(this._isEmpty(textarea.value));

        // if (textarea.value.length > 0) {
        //     newItem.push(textarea.value)
        // } else {
        //     newItem.push('---')
        // }
        console.log(newItem);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className={style.outsude}>
                <div className={style.window}>
                    <NavLink className={style.btnClose} to={'/'}>X</NavLink>
                    <div className={style.content}>
                        <form ref={this.getForm} action="POST" onSubmit={(evn) => {
                            evn.preventDefault()
                        }}>
                            <label htmlFor="styledSelect1" className={style.customSelect}>
                                <select name="options" id="styledSelect1">
                                    <option value="none" hidden>-</option>
                                    {this._getTypeList()}
                                </select>
                            </label>
                            {/*<Person/>*/}
                            <Hardware/>
                            <General/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalAddItems;