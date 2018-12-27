import * as actions from '../events/event-actions';

const initialState = {
  loading: false,
  error: null,
  eventList: [
    {
      id: 123,
      eventTitle: 'Five Thousand Pigs'
    },

    /* 2 */
    {
      id: 789,
      eventTitle: 'Lovely Event Coming Up'
    },

    /* 3 */
    {
      id: 345,
      eventTitle: 'My Graduation Day'
    },

    /* 4 */
    {
      id: 222,
      eventTitle: 'My Hire Date at XCompany'
    },

    /* 5 */
    {
      id: 121,
      eventTitle: 'An Old Event to Remeber'
    }
  ],
  eventDetails: {
    id: 123,
    eventTitle: 'Five Thousand Pigs',
    targetDate: '2016-03-04',
    eventNotes:
      'Vestibulum dictum elementum convallis. Ut at est porta, tempus est ut, rhoncus est. Maecenas vehicula, nunc non tincidunt ultricies, mauris nibh lobortis turpis, nec blandit nulla justo a nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean et odio id tortor iaculis tincidunt.'
  }
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
      eventDetails: null,
      eventList: []
    };

    // ERRORS
  } else if (
    action.type === actions.GET_EVENTS_FAILURE ||
    action.type === actions.GET_EVENT_FAILURE ||
    action.type === actions.CREATE_EVENT_FAILURE ||
    action.type === actions.UPDATE_EVENT_FAILURE ||
    action.type === actions.DELETE_EVENT_FAILURE
  ) {
    return {
      ...state,
      loading: false,
      error: action.error
    };

    // SUCCESSES
  } else if (action.type === actions.GET_EVENTS_SUCCESS) {
    return {
      ...state,
      loading: false,
      eventList: action.events
    };
  } else if (action.type === actions.GET_EVENT_SUCCESS) {
    return {
      ...state,
      loading: false,
      eventDetails: action.event
    };
  } else if (action.type === actions.CREATE_EVENT_SUCCESS) {
    return {
      ...state,
      loading: false,
      eventDetails: action.event
    };
  } else if (action.type === actions.UPDATE_EVENT_SUCCESS) {
    return {
      ...state,
      loading: false,
      eventDetails: action.event
    };
  } else if (action.type === actions.DELETE_EVENT_SUCCESS) {
    return {
      ...state,
      loading: false
    };
  }
  return state;
}
