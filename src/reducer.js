const initialStore = {
    sidebar: false
};

const ActionType = {
  SHOW_SIDEBAR: 'SHOW_SIDEBAR',
  HIDE_SIDEBAR: 'HIDE_SIDEBAR'
};

const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case ActionType.HIDE_SIDEBAR:
            return Object.assign({}, state, {sidebar: !state.sidebar});
        case ActionType.SHOW_SIDEBAR:
            return Object.assign({}, state, {sidebar: !state.sidebar});
    }
    return state
};

export {reducer, ActionType}
