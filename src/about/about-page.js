import React from 'react';
import HeaderBar from '../nav/header-bar';
import { Link } from 'react-router-dom';

export class AboutPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="home">
          <HeaderBar />
          <main role="main" className="main">
            <h2 className="constrain">About Us</h2>
            <p>Hi there!</p>
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
}

export default AboutPage;
