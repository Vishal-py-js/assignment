import { get_data, get_project_details, create_project } from "./constants"



export const getProjects = () => async(dispatch) => {
    dispatch({ type: get_data})
}

export const createProject = (data) => async(dispatch) => {
    dispatch({ type: create_project, payload: data})
}