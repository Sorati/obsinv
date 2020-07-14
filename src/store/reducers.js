import {combineReducers} from 'redux'
import {modalContainerReducer} from "./modal-container/reducer";
import {propertiesBarReducer} from "./properties-bar/reducer";
import {searchReducer} from './search/reducer'

export default combineReducers({
    modalContainer: modalContainerReducer,
    propertiesBar: propertiesBarReducer,
    search: searchReducer
});