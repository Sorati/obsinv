export const MODAL_CONTAINER_FULLNAME_TEXT = 'MODAL_CONTAINER_FULLNAME_TEXT';
export const MODAL_CONTAINER_DEPARTMENT_TEXT = 'MODAL_CONTAINER_DEPARTMENT_TEXT';

export const setFullnameText = (fullname) => ({
    type: 'MODAL_CONTAINER_FULLNAME_TEXT',
    payload: fullname
})

export const setDepartmentText = (department) => ({
    type: 'MODAL_CONTAINER_DEPARTMENT_TEXT',
    payload: department
})