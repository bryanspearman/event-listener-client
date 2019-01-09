import * as actions from '../items/item-actions';

const initialState = {
  loading: false,
  error: null,
  itemList: []
};
export default function reducer(state = initialState, action) {
  // REQUESTS
  if (
    action.type === actions.CREATE_ITEM_REQUEST ||
    action.type === actions.UPDATE_ITEM_REQUEST ||
    action.type === actions.DELETE_ITEM_REQUEST
  ) {
    return {
      ...state,
      loading: true,
      error: null
    };
  } else if (
    action.type === actions.GET_ITEMS_REQUEST ||
    action.type === actions.GET_ITEM_REQUEST
  ) {
    return {
      ...state,
      loading: true,
      error: null,
      itemList: []
    };

    // ERRORS
  } else if (
    action.type === actions.GET_ITEMS_FAILURE ||
    action.type === actions.GET_ITEM_FAILURE ||
    action.type === actions.CREATE_ITEM_FAILURE ||
    action.type === actions.UPDATE_ITEM_FAILURE ||
    action.type === actions.DELETE_ITEM_FAILURE
  ) {
    return {
      ...state,
      loading: false,
      error: action.error
    };

    // SUCCESSES
  } else if (action.type === actions.GET_ITEMS_SUCCESS) {
    return {
      ...state,
      loading: false,
      itemList: action.items
    };
  } else if (action.type === actions.GET_ITEM_SUCCESS) {
    return {
      ...state,
      loading: false,
      itemList: action.item
    };
  } else if (action.type === actions.CREATE_ITEM_SUCCESS) {
    return {
      ...state,
      loading: false,
      itemList: action.item
    };
  } else if (action.type === actions.UPDATE_ITEM_SUCCESS) {
    return {
      ...state,
      loading: false,
      itemList: action.item
    };
  } else if (action.type === actions.DELETE_ITEM_SUCCESS) {
    return {
      ...state,
      loading: false
    };
  } else if (action.type === actions.TOGGLE_SELECTED) {
    return {
      ...state,
      index: action.index
    };
  }
  return state;
}
