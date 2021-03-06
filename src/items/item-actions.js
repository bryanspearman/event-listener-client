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
export const SELECT_ITEM = 'SELECT_ITEM';

// Get All Items
export const getItemsAction = () => ({
  type: GET_ITEMS_REQUEST
});
export const getItemsSuccessAction = items => ({
  type: GET_ITEMS_SUCCESS,
  items
});
export const getItemsFailureAction = error => ({
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
export const getItemAction = () => ({
  type: GET_ITEM_REQUEST
});
export const getItemSuccessAction = item => ({
  type: GET_ITEM_SUCCESS,
  item
});
export const getItemFailureAction = error => ({
  type: GET_ITEM_FAILURE,
  error
});

export const getItem = itemId => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(getItemAction(itemId));
  return fetch(`${API_BASE_URL}/items/${itemId}`, {
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
export const createItemAction = item => ({
  type: CREATE_ITEM_REQUEST,
  item
});
export const createItemSuccessAction = () => ({
  type: CREATE_ITEM_SUCCESS
});
export const createItemFailureAction = error => ({
  type: CREATE_ITEM_FAILURE,
  error
});

export const createItem = item => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(createItemAction(item));
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
      return item;
    })
    .catch(err => {
      console.error(err);
      dispatch(createItemFailureAction(err));
    });
};

// Update Item
export const updateItemAction = (itemId, item) => ({
  type: UPDATE_ITEM_REQUEST,
  itemId,
  item
});
export const updateItemSuccessAction = item => ({
  type: UPDATE_ITEM_SUCCESS,
  item
});
export const updateItemFailureAction = error => ({
  type: UPDATE_ITEM_FAILURE,
  error
});

export const updateItem = data => (dispatch, getState) => {
  const { item, id } = data;
  const authToken = getState().auth.authToken;
  dispatch(updateItemAction(item));
  return fetch(`${API_BASE_URL}/items/${id}`, {
    method: 'PUT',
    body: JSON.stringify(item),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(() => {
      dispatch(updateItemSuccessAction());
    })
    .catch(err => {
      console.error(err);
      dispatch(updateItemFailureAction(err));
    });
};

// Delete Item
export const deleteItemAction = itemId => ({
  type: DELETE_ITEM_REQUEST,
  itemId
});
export const deleteItemSuccessAction = () => ({
  type: DELETE_ITEM_SUCCESS
});
export const deleteItemFailureAction = error => ({
  type: DELETE_ITEM_FAILURE,
  error
});

export const deleteItem = itemId => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(deleteItemAction(itemId));
  return fetch(`${API_BASE_URL}/items/${itemId}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(() => {
      dispatch(deleteItemSuccessAction());
    })
    .catch(err => {
      console.error(err);
      dispatch(deleteItemFailureAction(err));
    });
};

// Selected Item
export const selectItem = item => ({
  type: SELECT_ITEM,
  item
});
