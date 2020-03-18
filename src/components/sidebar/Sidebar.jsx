import React from "react";
import style from './Sidebar.module.css'

const Sidebar = ()=> {
    let sideBar = React.createRef();

    function test() {
        // let test = sideBar.current.style.display = 'none';
        console.log(test);
    }
    return(

        <aside  className={`${style.sidebar} ${style.sidebarShow}`} ref={sideBar} onClick={test}>
            <form action="POST">
                <label>1<input type="text"/></label>
                <label>1<input type="text"/></label>
                <label>1<input type="text"/></label>
                <label><input type="submit"/></label>
            </form>
        </aside >
    )
};

export default Sidebar;