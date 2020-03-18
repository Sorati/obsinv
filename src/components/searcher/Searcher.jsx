import React from "react";
import style from './Searcher.module.css';

function Searcher () {
   return (
       <form className={style.searcher}>
           <input type="text"/>
           <button>search</button>
       </form>
   )
}

export default Searcher;