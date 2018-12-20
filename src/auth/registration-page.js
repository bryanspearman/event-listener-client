import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Footer from '../ui/footer';
import RegistrationForm from './registration-form';
import HeaderBar from '../nav/header-bar';

export function RegistrationPage(props) {
  // If logged in (which happens automatically when registration
  // is successful) redirect to user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="row">
      <div className="home">
        <HeaderBar />
        <main role="main" className="main">
          <h2>Sign Up</h2>
          <RegistrationForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
