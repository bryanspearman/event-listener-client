import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuth } from '../auth/auth-actions';
import { clearAuthToken } from '../auth/local-storage';
import logo from '../ui/images/logo.png';
import NavBurger from './nav-burger';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    const defaultLinks = !this.props.loggedIn ? (
      <React.Fragment>
        <Link to="/login">
          <button className="sml-blu">Login</button>
        </Link>

        <Link to="/register">
          <button className="sml-red">Sign Up </button>
        </Link>
      </React.Fragment>
    ) : null;

    const authLinks = this.props.loggedIn ? (
      <React.Fragment>
        <div className="add-btn">
          <Link to="/dashboard/create">
            <i className="fas fa-plus-circle" />
            <span className="addEvent">Add Event</span>
          </Link>
        </div>
      </React.Fragment>
    ) : null;

    return (
      <div className="header-bar">
        <header role="banner" className="main-hdr">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <nav role="navigation" className="main-nav">
            <NavBurger />
          </nav>
        </header>
        <div className="status-bar">
          {defaultLinks}
          {authLinks}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
