import React from "react";
import style from "./General.module.css"

class General extends React.PureComponent {
    render() {
        const {CollectValue} = this.props;
        return (
            <div className={style.content__general}>
                <input type="file" name="file" id="file" className={style.inputfile} onChange={CollectValue}/>
                <label htmlFor="file">Выберите фото</label>
                <label><textarea name="description" rows="10" placeholder={'Описание'} onChange={CollectValue}></textarea></label>
                <button>Тык</button>
            </div>
        )
    }
}

export default General