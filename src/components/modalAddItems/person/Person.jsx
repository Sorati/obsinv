import React from "react";
import style from './Person.module.css'

class Person extends React.PureComponent{
    render() {
        const {CollectValue} = this.props;
        return (
            <div className={style.content__person}>
                <label><input name={'fullName'} type="text" placeholder={'Ф.И.О.'} onChange={CollectValue}/></label>
                <label><input name={'department'} type="text" placeholder={'Отдел'} onChange={CollectValue}/></label>
                <label><input name={'position'} type="text" placeholder={'Должность'} onChange={CollectValue}/></label>
                <label><input name={'location'} type="text" placeholder={'Кабинет'} onChange={CollectValue}/></label>
                <label className={style.checkbox}><input name={'HeadOfDepartment'} type="checkbox" onChange={CollectValue}/>
                    <span>Зав отдела</span></label>
            </div>
        )
    }
}

export default Person;
