const ActionType = {
    SEARCH_TEXT: 'SEARCH_TEXT'
}

const ActionCreator = {
    setSearchText: (searchText) => ({
        type: ActionType.SEARCH_TEXT,
        payload: searchText
    })
}

export {ActionType, ActionCreator}