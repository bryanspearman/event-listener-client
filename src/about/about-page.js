import React from 'react';
import { Link, Route } from 'react-router-dom';

import HeaderBar from '../nav/header-bar';

export default class AboutPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="home">
          <HeaderBar />
          <main role="main" className="main">
            <div className="main-content">
              <h1>About</h1>
              <h2>
                <em>Hi I'm Bryan!</em>
              </h2>
              <p>
                I'm a web developer based out of Greenville, South Carolina. I
                enjoy designing little apps like this as a means of continued
                education for myself in web development. I built this one with:
              </p>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Node</li>
                <li>Express</li>
                <li>Mongoose</li>
                <li>Mongo</li>
                <li>mLab</li>
              </ul>
              <p>
                for the purpose of excersicing my full-stack skills. Both front
                and back end are deployed with Heroku and the database is an
                mLab.
              </p>
              <Route
                exact
                path="/bryanspearman"
                component={() => {
                  window.location = 'https://bryanspearman.info';
                  return null;
                }}
              />
              <p>
                I designed, coded and implemented every aspect of the app and it
                was a lot of fun. If you'd like to see more of my projects
                please visit my portfolio site{' '}
                <Link to="/bryanspearman">here</Link>. I'm always for hire so if
                you're looking for project partner or a sub-contractor please
                <Link to="/contact"> drop me a line.</Link>
              </p>
            </div>

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
