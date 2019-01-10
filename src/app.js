import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import LandingPage from './home/landing-page';
import RegistrationPage from './auth/registration-page';
import LoginPage from './auth/login-page';
import Dashboard from './items/dashboard/dashboard';
// import EditItemView from './items/edit/editItemView';
import CreateItemView from './items/create/createItemView';
// import ItemDetailsView from './items/details/itemDetailsView';
import AboutPage from './about/about-page';

import { refreshAuthToken } from './auth/auth-actions';

export class App extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // Every hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={RegistrationPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        {/* <Route exact path="/edit" component={EditItemView} /> */}
        <Route exact path="/create" component={CreateItemView} />
        {/* <Route path="/items/:index" component={ItemDetailsView} /> */}
        <Route exact path="/about" component={AboutPage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
