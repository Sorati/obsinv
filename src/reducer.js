const initialStore = {
    sidebar: false
};

const ActionType = {
  SHOW_SIDEBAR: 'SHOW_SIDEBAR',
  HIDE_SIDEBAR: 'HIDE_SIDEBAR'
};

const ActionCreator = {
    showSidebar: () => ({type: ActionType.SHOW_SIDEBAR}),
    hideSidebar: () => ({type: ActionType.HIDE_SIDEBAR})
};

const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case ActionType.HIDE_SIDEBAR:
            return Object.assign({}, state, {sidebar: false});
        case ActionType.SHOW_SIDEBAR:
            return Object.assign({}, state, {sidebar: true});
        default: break;
    }
    return state
};

export {reducer, ActionType, ActionCreator}
