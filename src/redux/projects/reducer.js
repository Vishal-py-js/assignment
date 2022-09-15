import { get_data, get_project_details } from "./constants"
import { data } from "./data"



const initialState = {
    projects: data
}


export const projectReducer = (state=initialState, action) => {
    switch(action.type) {
        case get_data:
            return state
        
        default:
            return state
    }
}
