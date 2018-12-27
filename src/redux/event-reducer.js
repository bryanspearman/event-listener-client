import * as actions from "../events/event-actions";

const initialState = {
    loading: false,
    error: null,
    eventList: [],
    eventDetails: null
};
export default function reducer(state = initialState, action) {
    // REQUESTS
    if (
        action.type === actions.CREATE_EVENT_REQUEST ||
        action.type === actions.UPDATE_EVENT_REQUEST ||
        action.type === actions.DELETE_EVENT_REQUEST
    ) {
        return {
            ...state,
            loading: true,
            error: null
        };
    } else if (
        action.type === actions.GET_EVENTS_REQUEST ||
        action.type === actions.GET_EVENT_REQUEST
    ) {
        return {
            ...state,
            loading: true,
            error: null,
            noteDetails: null,
            noteList: []
        };
        // ERRORS
    } else if (
        action.type === actions.GET_EVENTS_FAILURE ||
        action.type === actions.GET_EVENT_FAILURE ||
        action.type === actions.CREATE_EVENT_FAILURE ||
        action.type === actions.UPDATE_EVENT_FAILURE ||
        action.type === actions.DELETE_EVENT_FAILURE
    ) {
        return { ...state, loading: false, error: action.error };
        // SUCCESSES
    } else if (action.type === actions.GET_EVENTS_SUCCESS) {
        return { ...state, loading: false, noteList: action.notes };
    } else if (action.type === actions.GET_EVENT_SUCCESS) {
        return { ...state, loading: false, noteDetails: action.note };
    } else if (action.type === actions.CREATE_EVENT_SUCCESS) {
        return { ...state, loading: false, noteDetails: action.note };
    } else if (action.type === actions.UPDATE_EVENT_SUCCESS) {
        return { ...state, loading: false, noteDetails: action.note };
    } else if (action.type === actions.DELETE_EVENT_SUCCESS) {
        return { ...state, loading: false };
    }
    return state;
}