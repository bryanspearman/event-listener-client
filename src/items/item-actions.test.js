import * as ItemActions from './item-actions';

describe('Item Actions', () => {
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
