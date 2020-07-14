import {ActionType} from './action';

const propertiesBarStore = {
    isShow: false
};

export const propertiesBarReducer = (state = propertiesBarStore, action) => {
    switch (action.type) {
        case ActionType.SHOW_SIDEBAR: {
            return (
                Object.assign({}, state, {isShow: action.payload})
            )
        }
        case ActionType.HIDE_SIDEBAR: {
            return (
                Object.assign({}, state, {isShow: action.payload})
            )
        }
        default: {
            return state
        }
    }
}
