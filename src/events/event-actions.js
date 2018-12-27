import { API_BASE_URL } from '../utils/config';
import { normalizeResponseErrors } from '../utils/utils';

const API = API_BASE_URL;

export const GET_EVENTS_REQUEST = 'GET_EVENTS';
const getEventsAction = () => ({
  type: GET_EVENTS_REQUEST
});
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
const getEventsSuccessAction = events => ({
  type: GET_EVENTS_SUCCESS,
  events
});
export const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE';
const getEventsFailureAction = error => ({
  type: GET_EVENTS_FAILURE,
  error
});

export const getEvents = events => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(getEventsAction({ events, authToken }));
  return fetch(`${API}/event`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ events }) => dispatch(getEventsSuccessAction(events)))
    .catch(err => {
      dispatch(getEventsFailureAction(err));
    });
};

export const GET_EVENT_REQUEST = 'GET_EVENT';
const getEventAction = eventId => ({
  type: GET_EVENT_REQUEST,
  eventId
});
export const GET_EVENT_SUCCESS = 'GET_EVENT_SUCCESS';
const getEventSuccessAction = event => ({
  type: GET_EVENT_SUCCESS,
  event
});
export const GET_EVENT_FAILURE = 'GET_EVENT_FAILURE';
const getEventFailureAction = error => ({
  type: GET_EVENT_FAILURE,
  error
});

export const getEvent = payload => dispatch => {
  const { event, eventId, jwt } = payload;
  dispatch(getEventAction({ eventId, jwt }));
  return fetch(`${API}/event/${eventId}`, {
    method: 'GET',
    body: JSON.stringify(event),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(event => {
      dispatch(getEventSuccessAction());
      return event;
    })
    .catch(err => {
      console.error(err);
      dispatch(getEventFailureAction(err));
    });
};

export const CREATE_EVENT_REQUEST = 'CREATE_EVENT';
const createEventAction = event => ({
  type: CREATE_EVENT_REQUEST,
  event
});
export const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS';
const createEventSuccessAction = () => ({
  type: CREATE_EVENT_SUCCESS
});
export const CREATE_EVENT_FAILURE = 'CREATE_EVENT_FAILURE';
const createEventFailureAction = error => ({
  type: CREATE_EVENT_FAILURE,
  error
});
export const createEvent = payload => dispatch => {
  const { event, jwt } = payload;
  dispatch(createEventAction({ event, jwt }));
  return fetch(`${API}/event/`, {
    method: 'POST',
    body: JSON.stringify(event),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(event => {
      dispatch(createEventSuccessAction());
      return event;
    })
    .catch(err => {
      console.error(err);
      dispatch(createEventFailureAction(err));
    });
};

export const UPDATE_EVENT_REQUEST = 'UPDATE_EVENT';
const updateEventAction = (eventId, event) => ({
  type: UPDATE_EVENT_REQUEST,
  eventId,
  event
});
export const UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS';
const updateEventSuccessAction = event => ({
  type: UPDATE_EVENT_SUCCESS,
  event
});
export const UPDATE_EVENT_FAILURE = 'UPDATE_EVENT_FAILURE';
const updateEventFailureAction = error => ({
  type: UPDATE_EVENT_FAILURE,
  error
});

export const updateEvent = payload => dispatch => {
  const { event, eventId, jwt } = payload;
  dispatch(updateEventAction({ eventId, jwt }));
  return fetch(`${API}/event/${eventId}`, {
    method: 'PUT',
    body: JSON.stringify(event),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(event => {
      dispatch(updateEventSuccessAction());
      dispatch(getEvent());
      return event;
    })
    .catch(err => {
      console.error(err);
      dispatch(updateEventFailureAction(err));
    });
};

export const DELETE_EVENT_REQUEST = 'DELETE_EVENT';
const deleteEventAction = eventId => ({
  type: DELETE_EVENT_REQUEST,
  eventId
});
export const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS';
const deleteEventSuccessAction = () => ({
  type: DELETE_EVENT_SUCCESS
});
export const DELETE_EVENT_FAILURE = 'DELETE_EVENT_FAILURE';
const deleteEventFailureAction = error => ({
  type: DELETE_EVENT_FAILURE,
  error
});

export const deleteEvent = payload => dispatch => {
  const { eventId, jwt } = payload;
  dispatch(deleteEventAction({ eventId, jwt }));
  return fetch(`${API}/posts/${eventId}`, { method: 'DELETE' })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      dispatch(deleteEventSuccessAction());
      dispatch(getEvent());
    })
    .catch(err => {
      console.error(err);
      dispatch(deleteEventFailureAction(err));
    });
};
