import { API_BASE_URL } from '../utils/config';
import { normalizeResponseErrors } from '../utils/utils';
export const GET_ITEMS_REQUEST = 'GET_ITEMS';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';
export const GET_ITEM_REQUEST = 'GET_ITEM';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAILURE = 'GET_ITEM_FAILURE';
export const CREATE_ITEM_REQUEST = 'CREATE_ITEM';
export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS';
export const CREATE_ITEM_FAILURE = 'CREATE_ITEM_FAILURE';
export const UPDATE_ITEM_REQUEST = 'UPDATE_ITEM';
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
export const UPDATE_ITEM_FAILURE = 'UPDATE_ITEM_FAILURE';
export const DELETE_ITEM_REQUEST = 'DELETE_ITEM';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';
export const TOGGLE_SELECTED = 'TOGGLE_SELECTED';

// Get All Items
const getItemsAction = () => ({
  type: GET_ITEMS_REQUEST
});
const getItemsSuccessAction = items => ({
  type: GET_ITEMS_SUCCESS,
  items
});
const getItemsFailureAction = error => ({
  type: GET_ITEMS_FAILURE,
  error
});

export const getItems = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(getItemsAction());
  return fetch(`${API_BASE_URL}/items/`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(items => dispatch(getItemsSuccessAction(items)))
    .catch(err => {
      console.error(err);
      dispatch(getItemsFailureAction(err));
    });
};

// Get One Item
const getItemAction = index => ({
  type: GET_ITEM_REQUEST,
  index
});
const getItemSuccessAction = item => ({
  type: GET_ITEM_SUCCESS,
  item
});
const getItemFailureAction = error => ({
  type: GET_ITEM_FAILURE,
  error
});

export const getItem = itemId => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(getItemAction(itemId));
  return fetch(`${API_BASE_URL}/items/:${itemId}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(item => dispatch(getItemSuccessAction(item)))
    .catch(err => {
      console.error(err);
      dispatch(getItemFailureAction(err));
    });
};

// Create Item
const createItemAction = item => ({
  type: CREATE_ITEM_REQUEST,
  item
});
const createItemSuccessAction = () => ({
  type: CREATE_ITEM_SUCCESS
});
const createItemFailureAction = error => ({
  type: CREATE_ITEM_FAILURE,
  error
});

export const createItem = (item, history) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(createItemAction());
  return fetch(`${API_BASE_URL}/items/`, {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(item => {
      dispatch(createItemSuccessAction());
      return history.push(`/details/${item}`);
    })
    .catch(err => {
      console.error(err);
      dispatch(createItemFailureAction(err));
    });
};

// Update Item
const updateItemAction = (itemId, item) => ({
  type: UPDATE_ITEM_REQUEST,
  itemId,
  item
});
const updateItemSuccessAction = item => ({
  type: UPDATE_ITEM_SUCCESS,
  item
});
const updateItemFailureAction = error => ({
  type: UPDATE_ITEM_FAILURE,
  error
});

export const updateItem = itemId => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(updateItemAction(itemId));
  return fetch(`${API_BASE_URL}/items/:${itemId}`, {
    method: 'PUT',
    body: JSON.stringify(itemId),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(item => {
      dispatch(updateItemSuccessAction(item));
      dispatch(getItem(itemId));
      return item;
    })
    .catch(err => {
      console.error(err);
      dispatch(updateItemFailureAction(err));
    });
};

// Delete Item
const deleteItemAction = itemId => ({
  type: DELETE_ITEM_REQUEST,
  itemId
});
const deleteItemSuccessAction = () => ({
  type: DELETE_ITEM_SUCCESS
});
const deleteItemFailureAction = error => ({
  type: DELETE_ITEM_FAILURE,
  error
});

export const deleteItem = itemId => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(deleteItemAction(itemId));
  return fetch(`${API_BASE_URL}/items/:${itemId}`, {
    method: 'DELETE',
    Authorization: `Bearer ${authToken}`
  })
    .then(res => {
      normalizeResponseErrors(res);
      dispatch(deleteItemSuccessAction());
      dispatch(getItems());
    })
    .catch(err => {
      console.error(err);
      dispatch(deleteItemFailureAction(err));
    });
};

// Toggle Selected
const toggleSelectedAction = index => ({
  type: TOGGLE_SELECTED,
  index
});

export const toggleSelected = index => dispatch => {
  dispatch(toggleSelectedAction(index));
};
