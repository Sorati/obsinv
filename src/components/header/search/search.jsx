import React from "react";
import style from './search.module.css';

function Search () {
   return (
       <form onSubmit={(evt) => {evt.preventDefault()}} className={style.searcher}>
           <input type="text"/>
           <button>search</button>
       </form>
   )
}

export default Search;