import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Footer from '../ui/footer';
import LoginForm from './login-form';
import HeaderBar from '../nav/header-bar';

export function LoginPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="row">
      <div className="home">
        <HeaderBar />
        <main role="main" className="main">
          <h2>Login</h2>
          <LoginForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
