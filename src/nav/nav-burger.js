import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuth } from '../auth/auth-actions';
import { clearAuthToken } from '../auth/local-storage';
import ResponsiveMenu from 'react-responsive-navbar';

export class NavBurger extends Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    const comingInLinks = !this.props.loggedIn ? (
      <React.Fragment>
        <ul>
          <Link to="/register">
            <li>Sign Up</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </React.Fragment>
    ) : null;

    const goingOutLinks = this.props.loggedIn ? (
      <React.Fragment>
        <ul>
          <Link to="/dashboard/create">
            <li>
              <i className="fas fa-plus-circle" /> Add Event
            </li>
          </Link>

          <Link to="/about">
            <li>
              <i className="fas fa-info-circle" /> About
            </li>
          </Link>

          <Link to="/contact">
            <li>
              <i className="fas fa-envelope" /> Contact
            </li>
          </Link>

          <Link to="#">
            <li onClick={this.logOut.bind(this)}>
              <i className="fas fa-sign-out-alt" /> Logout
            </li>
          </Link>
        </ul>
      </React.Fragment>
    ) : null;

    return (
      <ResponsiveMenu
        menuOpenButton={
          <div className="burger">
            <i className="fas fa-bars" />
          </div>
        }
        menuCloseButton={
          <div className="burger">
            <i className="fas fa-bars" />
          </div>
        }
        changeMenuOn="5000px"
        largeMenuClassName="lrg-dropdown-menu"
        smallMenuClassName="sml-dropdown-menu"
        menu={
          <div className="drop-down">
            {comingInLinks}
            {goingOutLinks}
          </div>
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBurger);
