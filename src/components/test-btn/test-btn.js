import React from "react";
import style from './test-btn.module.css'

const TestBtn = (props) => {

    const handleButtonTest = () => {
        props.showSidebar()
    }

    return(
        <button className={style.testBtn} onClick={handleButtonTest}/>
    )
}

export default TestBtn