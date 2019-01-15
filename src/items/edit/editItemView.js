import React from 'react';
import { connect } from 'react-redux';

import requiresLogin from '../../utils/requires-login';
import EditItemForm from './editItemForm';
import { getItem, updateItem, getItems } from '../item-actions';

export class EditItemView extends React.Component {
  componentDidMount() {
    this.props.getItem(this.props.match.params.id);
  }

  updateItem(values) {
    this.props
      .updateItem({
        id: this.props.selectedItem.id,
        item: values
      })
      .then(() => {
        this.props.getItems();
        this.props.history.push(
          `/dashboard/details/${this.props.selectedItem.id}`
        );
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Editing Event</h1>
        <EditItemForm onSubmit={this.updateItem.bind(this)} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedItem: state.item.selectedItem
  };
};

const mapDispatchToProps = {
  getItem,
  updateItem,
  getItems
};

export default requiresLogin()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditItemView)
);
