import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../../utils/requires-login';
import CreateItemForm from './createItemForm';
import { getItems, createItem } from '../item-actions';

export class CreateItemView extends React.Component {
  createItem(values) {
    values.itemDate = new Date(values.itemDate).toISOString();
    this.props
      .createItem({
        item: values
      })
      .then(createdItem => {
        this.props.getItems();
        this.props.history.push(`/dashboard/details/${createdItem.id}`);
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Create a New Event</h1>
        <CreateItemForm onSubmit={this.createItem.bind(this)} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemList: state.item.itemList,
    selectedItem: state.item.selectedItem
  };
};

const mapDispatchToProps = {
  createItem,
  getItems
};

export default requiresLogin()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateItemView)
);
