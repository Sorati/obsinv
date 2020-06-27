const initialStore = {
    propertiesBar: false
};

const ActionType = {
  SHOW_SIDEBAR: 'SHOW_SIDEBAR',
  HIDE_SIDEBAR: 'HIDE_SIDEBAR'
};

const ActionCreator = {
    showSidebar: () => ({type: ActionType.SHOW_SIDEBAR}),
    hideSidebar: () => ({type: ActionType.HIDE_SIDEBAR})
};

const propertiesBarReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ActionType.HIDE_SIDEBAR:
            return Object.assign({}, state, {propertiesBar: false});
        case ActionType.SHOW_SIDEBAR:
            return Object.assign({}, state, {propertiesBar: true});
        default: break;
    }
    return state
};

export {propertiesBarReducer, ActionType, ActionCreator}
