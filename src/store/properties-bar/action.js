const ActionType = {
    SHOW_SIDEBAR: 'SHOW_SIDEBAR',
    HIDE_SIDEBAR: 'HIDE_SIDEBAR'
}

const ActionCreator = {
    showSidebar: () => ({
        type: ActionType.SHOW_SIDEBAR,
        payload: true
    }),
    hideSidebar: () => ({
        type: ActionType.HIDE_SIDEBAR,
        payload: false
    })
}

export {ActionType, ActionCreator}