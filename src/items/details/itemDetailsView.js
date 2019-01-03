import React from 'react';
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
            <ItemListView />
            <div className="info-view">
              <ItemDetails index={this.props.match.params.index} />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default requiresLogin()(ItemDetailsView);
