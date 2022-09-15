import { get_data, get_project_details } from "./constants"



export const getProjects = () => async(dispatch) => {
    dispatch({ type: get_data})
}

export const getProjectDetails = () => async(dispatch) => {
    dispatch({ type: get_project_details})
}