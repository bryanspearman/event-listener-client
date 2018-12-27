import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../../auth/requires-login';
import HeaderBar from '../../nav/header-bar';
import SplashView from './splashView';
import EventListView from '../list/eventListView';

export class Dashboard extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="dashboard">
          <HeaderBar />
          <main role="main">
            <div className="list-nav">
              <EventListView />
            </div>
            <div className="info-view">
              <SplashView />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName}`
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
