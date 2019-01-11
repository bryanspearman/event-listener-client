import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../../utils/requires-login';
import CreateItemForm from './createItemForm';
import { createItem } from '../item-actions';

export class CreateItemView extends React.Component {
  createItem(values) {
    this.props.createItem(
      {
        item: values
      },
      this.props.history
    ); /*.then(() => {
      this.props.getItems();
      this.props.history.push('/');
    });*/
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

const mapDispatchToProps = {
  createItem
};

export default requiresLogin()(
  connect(
    null,
    mapDispatchToProps
  )(CreateItemView)
);
