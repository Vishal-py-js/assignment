import { get_data, get_project_details, create_project } from "./constants"
import { data } from "./data"



const initialState = {
    projects: data
}


export const projectReducer = (state=initialState, action) => {
    switch(action.type) {
        case get_data:
            return state
        
        case create_project:
            state.projects.push(action.payload)
            return state
        default:
            return state
    }
}

