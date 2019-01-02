import React from 'react';
import { connect } from 'react-redux';

import requiresLogin from '../../auth/requires-login';
import CreateItemForm from './createItemForm';
import { createItem } from '../item-actions';

export class CreateItemView extends React.Component {
  createEvent(values) {
    this.props
      .createItem({
        item: values
      })
      .then(item => {
        this.props.history.push(`/details/${item.id}`);
      });
  }

  render() {
    return (
      <main id="item-create">
        <h1>Create a New Event</h1>
        <CreateItemForm onSubmit={this.createItem.bind(this)} />
      </main>
    );
  }
}

const mapDispatchToProps = {
  createItem
};

export default requiresLogin(connect(mapDispatchToProps)(CreateItemView));
