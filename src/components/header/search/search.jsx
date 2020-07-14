import React from "react";
import style from './search.module.css';

const Search = (props) => {
    console.log(props)
    const onSearchChange = (event) => {
        props.setSearchText(event.target.value)
    }


    return (
        <form onSubmit={(evt) => {
            evt.preventDefault()
        }} className={style.searcher}>
            <input type="text"
                   value={props.searchValue}
                   onChange={onSearchChange}
            />
            <button>search</button>
        </form>
    )
}

export default Search;