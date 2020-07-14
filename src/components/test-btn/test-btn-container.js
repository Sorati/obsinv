import React from "react";
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/properties-bar/action'
import TestBtn from "./test-btn";

const TestBtnContainer = (props) => {
    return(
        <TestBtn showSidebar={props.showSidebar}/>
    )
}

const mapStateToProps = (state) => {
    return {
        propertiesBar: state.propertiesBar.isShow
    };
};

const mapDispatchToProps = (dispatch) => ({
    showSidebar() {
        dispatch(ActionCreator.showSidebar())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(TestBtnContainer)