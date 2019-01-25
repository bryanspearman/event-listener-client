import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import RegistrationForm from './registration-form';
import HeaderBar from '../nav/header-bar';
import { registerUser } from './users';

export class RegistrationPage extends React.Component {
  signUp = values => {
    const { firstName, lastName, username, password } = values;
    const user = { firstName, lastName, username, password };
    this.props
      .dispatch(registerUser(user))
      .then(() => {
        if (this.props.error) {
          return alert('An error occurred');
        }
        this.props.history.push('/login');
      })
      .catch(() => {
        if (this.props.error) {
          alert('An error occurred');
        }
      });
  };

  render() {
    // If already logged in redirect to dashboard
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="row">
        <div className="home">
          <HeaderBar />
          <main role="main" className="main">
            <h2 className="constrain">Sign Up</h2>
            <RegistrationForm onSubmit={this.signUp} />
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  error: state.auth.error
});

export default connect(mapStateToProps)(RegistrationPage);
