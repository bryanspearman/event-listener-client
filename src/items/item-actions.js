import { API_BASE_URL } from '../utils/config';
import { normalizeResponseErrors } from '../utils/utils';

export const GET_ITEMS_REQUEST = 'GET_ITEMS';
const getItemsAction = () => ({
  type: GET_ITEMS_REQUEST
});
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
const getItemsSuccessAction = items => ({
  type: GET_ITEMS_SUCCESS,
  items
});
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';
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
    .then(({ items }) => dispatch(getItemsSuccessAction(items)))
    .catch(err => {
      console.error(err);
      dispatch(getItemsFailureAction(err));
    });
};

export const GET_ITEM_REQUEST = 'GET_ITEM';
const getItemAction = itemId => ({
  type: GET_ITEM_REQUEST,
  itemId
});
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
const getItemSuccessAction = item => ({
  type: GET_ITEM_SUCCESS,
  item
});
export const GET_ITEM_FAILURE = 'GET_ITEM_FAILURE';
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
    .then(({ item }) => dispatch(getItemSuccessAction(item)))
    .catch(err => {
      console.error(err);
      dispatch(getItemFailureAction(err));
    });
};

export const CREATE_ITEM_REQUEST = 'CREATE_ITEM';
const createItemAction = item => ({
  type: CREATE_ITEM_REQUEST,
  item
});
export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS';
const createItemSuccessAction = () => ({
  type: CREATE_ITEM_SUCCESS
});
export const CREATE_ITEM_FAILURE = 'CREATE_ITEM_FAILURE';
const createItemFailureAction = error => ({
  type: CREATE_ITEM_FAILURE,
  error
});
export const createItem = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(createItemAction());
  return fetch(`${API_BASE_URL}/items/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ item }) => {
      dispatch(createItemSuccessAction());
      return item;
    })
    .catch(err => {
      console.error(err);
      dispatch(createItemFailureAction(err));
    });
};

export const UPDATE_ITEM_REQUEST = 'UPDATE_ITEM';
const updateItemAction = (itemId, item) => ({
  type: UPDATE_ITEM_REQUEST,
  itemId,
  item
});
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
const updateItemSuccessAction = item => ({
  type: UPDATE_ITEM_SUCCESS,
  item
});
export const UPDATE_ITEM_FAILURE = 'UPDATE_ITEM_FAILURE';
const updateItemFailureAction = error => ({
  type: UPDATE_ITEM_FAILURE,
  error
});

export const updateItem = itemId => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(updateItemAction(itemId));
  return fetch(`${API_BASE_URL}/items/:${itemId}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ item }) => {
      dispatch(updateItemSuccessAction(item));
      dispatch(getItem(itemId));
      return item;
    })
    .catch(err => {
      console.error(err);
      dispatch(updateItemFailureAction(err));
    });
};

export const DELETE_ITEM_REQUEST = 'DELETE_ITEM';
const deleteItemAction = itemId => ({
  type: DELETE_ITEM_REQUEST,
  itemId
});
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
const deleteItemSuccessAction = () => ({
  type: DELETE_ITEM_SUCCESS
});
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';
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
