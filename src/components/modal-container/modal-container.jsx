import React from "react";
import style from './modal-container.module.css'
import {NavLink} from "react-router-dom";
import Person from "./person/person";
import General from "./general/general";
import Hardware from "./hardware/hardware";
import Computer from "./computer/computer"

class ModalContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.data = props.date.data;
        this.getForm = React.createRef();
        this.state = {
            chooseCategory: ''
        };
        this.newFieldValue = {};
        this.handlerChooseCategory = this.handlerChooseCategory.bind(this);
        this._getCategory = this._getCategory.bind(this);
        this._getTypeList = this._getTypeList.bind(this);
        this._CollectValueForm = this._CollectValueForm.bind(this);
        this._clearFieldValue = this._clearFieldValue.bind(this);
    }

    _clearFieldValue(){
        for(let field in this.newFieldValue){
            delete this.newFieldValue[field]
        }
    }

    _getCategory() {
        const chooseCategory = this.state.chooseCategory;
        const draw = [];
        switch (chooseCategory) {
            case "pc":
                draw.push(<Computer key={'pc'} CollectValue={this._CollectValueForm}/>);
                break;
            case "monitor":
                draw.push(<Hardware key={'monitor'} CollectValue={this._CollectValueForm}/>);
                break;
            case "mouse":
                draw.push(<Hardware key={'mouse'} CollectValue={this._CollectValueForm}/>);
                break;
            case "keyboard":
                draw.push(<Hardware key={'keyboard'} CollectValue={this._CollectValueForm}/>);
                break;
            case "person":
                draw.push(<Person key={'person'} CollectValue={this._CollectValueForm}/>);
                break;
            default : {}
        }
        if(draw[0]){
            draw.push(<General key={'general'} CollectValue={this._CollectValueForm}/>);
        }
        this._clearFieldValue();
        return draw
    }

    _getTypeList() {
        const list = [];
        for (let type in this.data) {
            list.push(<option value={`${type}`} key={`${type}`}>{`${type}`}</option>)
        }
        return list
    }

    handlerChooseCategory(evt) {
        this.setState({chooseCategory : evt.target.value});
    }

    _CollectValueForm(evt){
        if(evt.target.type === 'checkbox' && 'ethernet'){
            console.log(`name:${evt.target.name} checked:${evt.target.checked}`)
        } else {
            console.log(`Value:${evt.target.value} Name:${evt.target.name}`)
        }
    }

    render() {
        return (
            <div className={style.outsude}>
                <div className={style.window}>
                    <NavLink className={style.btnClose} to={'/'} />
                    <div className={style.content}>
                        <form ref={this.getForm} action="POST" onSubmit={(evn) => {evn.preventDefault()}}>
                            <label htmlFor="styledSelect1" className={style.customSelect}>
                                <select name="options" id="styledSelect1" onChange={(env) => {this.handlerChooseCategory(env)}}>
                                    <option value="none" hidden>-</option>
                                    {this._getTypeList()}
                                </select>
                            </label>

                            {this._getCategory()}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalContainer;
