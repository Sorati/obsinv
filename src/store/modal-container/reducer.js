import {MODAL_CONTAINER_FULLNAME_TEXT, MODAL_CONTAINER_DEPARTMENT_TEXT} from './action'

const modalContainerState = {
    fullName:'',
    department: '',
    position: '',
    location: '',
    HeadOfDepartment: '',
}

export const modalContainerReducer = (state = modalContainerState, action) => {
    switch (action.type) {
        case MODAL_CONTAINER_FULLNAME_TEXT: {
            return {
                ...state,
                fullName: action.payload
            }
        }
        case MODAL_CONTAINER_DEPARTMENT_TEXT: {
            return {
                ...state,
                department: action.payload
            }
        }
        default: {
            return state
        }
    }
}