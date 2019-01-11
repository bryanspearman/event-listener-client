import React from 'react';
import { connect } from 'react-redux';

export class SplashView extends React.Component {
  render() {
    return (
      <div className="splash">
        <h1>Hi there {this.props.name}!</h1>
        <p>Welcome to EventListener!</p>
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

export default connect(mapStateToProps)(SplashView);
