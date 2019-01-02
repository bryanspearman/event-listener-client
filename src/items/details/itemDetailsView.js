import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../../auth/requires-login';
import HeaderBar from '../../nav/header-bar';
import ItemDetails from './itemDetails';
import ItemListView from '../list/itemListView';

export class ItemDetailsView extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="dashboard">
          <HeaderBar />
          <main role="main">
            <div className="list-nav">
              <ItemListView />
            </div>
            <div className="info-view">
              <ItemDetails />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default requiresLogin(connect(ItemDetailsView));
