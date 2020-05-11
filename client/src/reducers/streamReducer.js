import _ from "lodash";
import { 
    EDIT_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    CREATE_STREAM
} from "../actions/types";

export default (state={}, action) => {
    switch(action.type){
        case FETCH_STREAM:
            // Use key interpolation
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case DELETE_STREAM:
            // omit creates a new state object, so no need to create new object
            return _.omit(state, action.payload)
        default:
            return state
    }
}
