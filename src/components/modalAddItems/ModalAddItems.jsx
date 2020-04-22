import React from "react";
import style from './ModalAddItems.module.css'
import {NavLink} from "react-router-dom";
import Person from "./person/Person";
import General from "./general/General";
import Hardware from "./hardware/Hardware";
import Computer from "./Computer/Computer"

class ModalAddItems extends React.PureComponent {
    constructor(props) {
        super(props);
        this.data = props.date.data;
        this.getForm = React.createRef();
        this.state = {
            chooseCategory: ''
        }
    }

    _getCategory() {
        const chooseCategory = this.state.chooseCategory;
        const draw = [];
        switch (chooseCategory) {
            case "pc":
                draw.push(<Computer key={'pc'}/>);
                break;
            case "monitor":
                draw.push(<Hardware key={'monitor'}/>);
                break;
            case "mouse":
                draw.push(<Hardware key={'mouse'}/>);
                break;
            case "keyboard":
                draw.push(<Hardware key={'keyboard'}/>);
                break;
            case "person":
                draw.push(<Person key={'person'}/>);
                break;
            default : {}
        }
        if(draw[0]){
            draw.push(<General key={'general'}/>);
        }
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
                                <select name="options" id="styledSelect1" onChange={(env) => {
                                    this.handlerChooseCategory(env)
                                }}>
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

export default ModalAddItems;