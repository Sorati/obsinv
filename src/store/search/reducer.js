import {ActionType} from "./action";

const searchStore = {
    searchValue: ''
}

export const searchReducer = (state = searchStore, action) => {
    console.log(state);
    switch (action.type) {
        case ActionType.SEARCH_TEXT: {
            return (
                Object.assign({}, state, {searchValue: action.payload})
            )
        }
        default: {
            return state
        }
    }
}