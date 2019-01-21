import itemReducer from './item-reducer';
import * as ItemActions from './item-actions';

describe('Item Reducer', () => {
  const INITIAL_STATE = {
    loading: false,
    error: null,
    itemList: [],
    selectedItem: null
  };

  // REQUESTS
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

  // ERRORS
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

    it('CREATE_ITEM_FAILURE', () => {
      const error = { message: 'Whooops!' };
      const newState = itemReducer(
        INITIAL_STATE,
        ItemActions.createItemFailureAction(error)
      );
      expect(newState.loading).toBeFalsy();
      expect(newState.error).toEqual(error);
    });

    it('UPDATE_ITEM_FAILURE', () => {
      const error = { message: 'Whooops!' };
      const newState = itemReducer(
        INITIAL_STATE,
        ItemActions.updateItemFailureAction(error)
      );
      expect(newState.loading).toBeFalsy();
      expect(newState.error).toEqual(error);
    });

    it('DELETE_ITEM_FAILURE', () => {
      const error = { message: 'Whooops!' };
      const newState = itemReducer(
        INITIAL_STATE,
        ItemActions.deleteItemFailureAction(error)
      );
      expect(newState.loading).toBeFalsy();
      expect(newState.error).toEqual(error);
    });
  });

  // SUCCESSES
  describe('SUCCESS', () => {
    it('GET_ITEMS_SUCCESS', () => {
      const items = [];
      const newState = itemReducer(
        INITIAL_STATE,
        ItemActions.getItemsSuccessAction(items)
      );
      expect(newState.loading).toBeFalsy();
      expect(newState.itemList).toEqual(items);
    });

    it('GET_ITEM_SUCCESS', () => {
      const item = {};
      const newState = itemReducer(
        INITIAL_STATE,
        ItemActions.getItemSuccessAction(item)
      );
      expect(newState.loading).toBeFalsy();
      expect(newState.selectedItem).toEqual(item);
    });

    it('CREATE_ITEM_SUCCESS', () => {
      const newState = itemReducer(
        INITIAL_STATE,
        ItemActions.createItemSuccessAction()
      );
      expect(newState.loading).toBeFalsy();
    });

    it('UPDATE_ITEM_SUCCESS', () => {
      const newState = itemReducer(
        INITIAL_STATE,
        ItemActions.updateItemSuccessAction()
      );
      expect(newState.loading).toBeFalsy();
    });

    it('DELETE_ITEM_SUCCESS', () => {
      const newState = itemReducer(
        INITIAL_STATE,
        ItemActions.deleteItemSuccessAction()
      );
      expect(newState.loading).toBeFalsy();
    });
  });
});
