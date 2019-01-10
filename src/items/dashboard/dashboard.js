import React from 'react';
import requiresLogin from '../../auth/requires-login';
import HeaderBar from '../../nav/header-bar';
import SplashView from './splashView';
import ItemListView from '../list/itemListView';

export class Dashboard extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="dashboard">
          <HeaderBar />
          <main role="main">
            <ItemListView />
            <div className="info-view">
              <SplashView />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default requiresLogin()(Dashboard);
