import React from "react";
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/properties-bar/action';
import PropertiesBar from './properties-bar'

const PropertiesBarContainer = (props) => {
    return(
        <PropertiesBar hideSidebar={props.hideSidebar} />
    )
}

const mapStateToProps = (state) => {
    return {
        propertiesBar: state.propertiesBar.isShow
    }
};

const mapDispatchToProps = (dispatch) => ({
    hideSidebar() {
        dispatch(ActionCreator.hideSidebar())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(PropertiesBarContainer)