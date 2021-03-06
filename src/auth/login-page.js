import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './login-form';
import { login } from './auth-actions';
import HeaderBar from '../nav/header-bar';

export class LoginPage extends React.Component {
  userLogin = values => {
    if (this.props.error) {
      return alert('An error occurred');
    }
    this.props
      .dispatch(login(values.username, values.password))
      .then(() => {
        if (this.props.error) {
          return alert('An error occurred');
        }
      })
      .catch(() => {
        if (this.props.error) {
          return alert('An error occurred');
        }
      });
  };

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="row">
        <div className="home">
          <HeaderBar />
          <main role="main" className="main">
            <h2 className="constrain">Login</h2>
            <LoginForm onSubmit={this.userLogin} />
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

export default connect(mapStateToProps)(LoginPage);
