import React from "react";
import {connect} from 'react-redux';
import Search from "./search";
import {ActionCreator} from '../../../store/search/action'

const SearchContainer = (props) => {
    return (
        <Search searchValue={props.searchValue} setSearchText={props.setSearchText}/>
        )
}

const mapStateToProps = (state) => {
    return {
        searchValue: state.search.searchValue
    }
}

const mapDispatchToProps = (dispatch) => ({
    setSearchText() {
        dispatch(ActionCreator.setSearchText())
    }
})

// const mapDispatchToProps = {
//     setSearchText: ActionCreator.setSearchText
// }

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)