import itemReducer from './item-reducer';
import * as ItemActions from './item-actions';

describe('Item Reducer', () => {
  const INITIAL_STATE = {
    loading: false,
    error: null,
    itemList: [],
    selectedItem: null
  };

  describe('REQUEST', () => {
    it('CREATE_ITEM_REQUEST', () => {
      const item = {};
      const newState = itemReducer(
        INITIAL_STATE,
        ItemActions.createItemAction(item)
      );
      expect(newState.loading).toBeTruthy();
    });

    it('UPDATE_ITEM_REQUEST', () => {
      const item = {};
      const newState = itemReducer(
        INITIAL_STATE,
        ItemActions.updateItemAction(item)
      );
      expect(newState.loading).toBeTruthy();
    });

    it('DELETE_ITEM_REQUEST', () => {
      const item = {};
      const newState = itemReducer(
        INITIAL_STATE,
        ItemActions.deleteItemAction(item)
      );
      expect(newState.loading).toBeTruthy();
    });

    it('GET_ITEMS_REQUEST', () => {
      const newState = itemReducer(INITIAL_STATE, ItemActions.getItemsAction());
      expect(newState.loading).toBeTruthy();
    });

    it('GET_ITEM_REQUEST', () => {
      const newState = itemReducer(INITIAL_STATE, ItemActions.getItemAction());
      expect(newState.loading).toBeTruthy();
    });
  });

  describe('FAILURE', () => {
    it('GET_ITEMS_FAILURE', () => {
      const error = { message: 'Whooops!' };
      const newState = itemReducer(
        INITIAL_STATE,
        ItemActions.getItemsFailureAction(error)
      );
      expect(newState.loading).toBeFalsy();
      expect(newState.error).toEqual(error);
    });
  });
});
