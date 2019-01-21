import * as ItemActions from './item-actions';

describe('Item Actions', () => {
  // GET ITEM(S)
  describe('GET_ITEM(S)', () => {
    it('getItemsAction', () => {
      expect(ItemActions.getItemsAction()).toEqual({
        type: ItemActions.GET_ITEMS_REQUEST
      });
    });

    it('getItemsSuccessAction', () => {
      const items = [];
      expect(ItemActions.getItemsSuccessAction(items)).toEqual({
        type: ItemActions.GET_ITEMS_SUCCESS,
        items
      });
    });

    it('getItemsFailureAction', () => {
      const error = {};
      expect(ItemActions.getItemsFailureAction(error)).toEqual({
        type: ItemActions.GET_ITEMS_FAILURE,
        error
      });
    });
  });

  // GET ITEM
  describe('GET_ITEM', () => {
    it('getItemAction', () => {
      expect(ItemActions.getItemAction()).toEqual({
        type: ItemActions.GET_ITEM_REQUEST
      });
    });

    it('getItemSuccessAction', () => {
      expect(ItemActions.getItemSuccessAction()).toEqual({
        type: ItemActions.GET_ITEM_SUCCESS
      });
    });

    it('getItemFailureAction', () => {
      expect(ItemActions.getItemFailureAction()).toEqual({
        type: ItemActions.GET_ITEM_FAILURE
      });
    });
  });

  // CREATE ITEM
  describe('CREATE_ITEM', () => {
    it('createItemAction', () => {
      const item = {};
      expect(ItemActions.createItemAction(item)).toEqual({
        type: ItemActions.CREATE_ITEM_REQUEST,
        item
      });
    });

    it('createItemSuccessAction', () => {
      expect(ItemActions.createItemSuccessAction()).toEqual({
        type: ItemActions.CREATE_ITEM_SUCCESS
      });
    });

    it('createItemFailureAction', () => {
      const error = {};
      expect(ItemActions.createItemFailureAction(error)).toEqual({
        type: ItemActions.CREATE_ITEM_FAILURE,
        error
      });
    });
  });

  // UPDATE ITEM
  describe('UPDATE_ITEM', () => {
    it('updateItemAction', () => {
      const itemId = {};
      const item = {};
      expect(ItemActions.updateItemAction(itemId, item)).toEqual({
        type: ItemActions.UPDATE_ITEM_REQUEST,
        itemId,
        item
      });
    });

    it('updateItemSuccessAction', () => {
      const item = {};
      expect(ItemActions.updateItemSuccessAction(item)).toEqual({
        type: ItemActions.UPDATE_ITEM_SUCCESS,
        item
      });
    });

    it('updateItemFailureAction', () => {
      const error = {};
      expect(ItemActions.updateItemFailureAction(error)).toEqual({
        type: ItemActions.UPDATE_ITEM_FAILURE,
        error
      });
    });
  });

  // DELETE ITEM
  describe('DELETE_ITEM', () => {
    it('deleteItemAction', () => {
      const itemId = {};
      expect(ItemActions.deleteItemAction(itemId)).toEqual({
        type: ItemActions.DELETE_ITEM_REQUEST,
        itemId
      });
    });

    it('deleteItemSuccessAction', () => {
      expect(ItemActions.deleteItemSuccessAction()).toEqual({
        type: ItemActions.DELETE_ITEM_SUCCESS
      });
    });

    it('deleteItemFailureAction', () => {
      const error = {};
      expect(ItemActions.deleteItemFailureAction(error)).toEqual({
        type: ItemActions.DELETE_ITEM_FAILURE,
        error
      });
    });
  });
});
