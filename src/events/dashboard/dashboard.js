import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../../auth/requires-login';
// import { fetchProtectedData } from '../auth/protected-data';
import HeaderBar from '../../nav/header-bar';
import EventListView from './eventListView';
import EventDetailsView from './eventDetailsView';

export class Dashboard extends React.Component {
  // componentDidMount() {
  //   this.props.dispatch(fetchProtectedData());
  // }

  render() {
    return (
      <div className="row">
        <div className="dashboard">
          <HeaderBar />
          <main role="main">
            <EventListView />
            <EventDetailsView />
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
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));

/* <div className="dashboard-username">
                      Username: {this.props.username}
                    </div>
                    <div className="dashboard-name">Name: {this.props.name}</div>
                    <div className="dashboard-protected-data">
                      Protected data: {this.props.protectedData}
                    </div> */
