import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../../auth/requires-login';
import HeaderBar from '../../nav/header-bar';
import EventDetails from './eventDetails';
import EventListView from '../list/eventListView';

export function EventDetailsView() {
  return (
    <div className="row">
      <div className="dashboard">
        <HeaderBar />
        <main role="main">
          <div className="list-nav">
            <EventListView />
          </div>
          <div className="info-view">
            <EventDetails />
          </div>
        </main>
      </div>
    </div>
  );
}

export default requiresLogin(connect(EventDetailsView));
