import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../../auth/requires-login';
import HeaderBar from '../../nav/header-bar';
import ItemListView from '../list/itemListView';
import CreateItemForm from './createItemForm';
import { createItem } from '../item-actions';

export class CreateItemView extends React.Component {
  createItem(values) {
    this.props
      .createItem({
        item: values
      })
      .then(item => {
        this.props.history.push(`/details/${item.index}`);
      });
  }

  render() {
    return (
      <div className="row">
        <div className="dashboard">
          <HeaderBar />
          <main role="main" id="item-create">
            <ItemListView />
            <div className="info-view">
              <h1>Create a New Event</h1>
              <CreateItemForm onSubmit={this.createItem.bind(this)} />
            </div>
          </main>
        </div>
      </div>
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
