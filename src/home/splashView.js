import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class SplashView extends React.Component {
  render() {
    return (
      <div className="splash">
        <div className="main-content">
          <h1>Hi there {this.props.name}!</h1>
          <p>Welcome to EventListener!</p>
          <h2>
            How long <em>until</em> that event?
          </h2>
          <p>
            Simply <Link to="/dashboard/create">Add an Event </Link>and find
            out! Your "How Long Until" events will be listed under that heading
            in the sidebar.
          </p>
          <h2>
            How long <em>since</em> that event?
          </h2>
          <p>
            Again, <Link to="/dashboard/create">Create an Event</Link> and your
            "How Long Since" events will be listed under that headeing in the
            sidebar.
          </p>
          <p>Enjoy!</p>
        </div>
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
