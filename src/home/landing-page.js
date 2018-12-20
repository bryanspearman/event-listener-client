import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import HeaderBar from '../nav/header-bar';

export function LandingPage(props) {
  // If logged in redirect straight to user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="row">
      <div className="home">
        <HeaderBar />
        <main role="main" className="main">
          <h2 className="constrain">
            Event Listener lets you count down to upcoming events or see how
            long its been since a past event.
          </h2>
          <Link to="/register">
            <button className="lrg-red">
              <strong>Sign Up - It's Free!</strong>
            </button>
          </Link>
          <p className="sml-txt">
            Already use Event Listener? <Link to="/login">Login here</Link>
          </p>
        </main>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
