import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuth } from '../auth/auth-actions';
import { clearAuthToken } from '../utils/local-storage';
import logo from '../ui/images/logo.png';

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
          <i className="fas fa-plus-circle" />
          <Link className="addEvent" to="/add">
            Add Event
          </Link>
          <button className="sml-blu" onClick={this.logOut.bind(this)}>
            Logout
          </button>
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
            <i className="fas fa-bars" />
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