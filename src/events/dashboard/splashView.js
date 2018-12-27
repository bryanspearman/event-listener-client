import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../../auth/requires-login';
export class SplashView extends React.Component {
  render() {
    return (
      <div className="splash">
        <h1>Welcome!</h1>
        <p>Hi there {this.props.name}!</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    name: `${currentUser.firstName}`
  };
};

export default requiresLogin()(connect(mapStateToProps)(SplashView));
