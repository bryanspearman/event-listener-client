import React from 'react';
import { Link } from 'react-router-dom';

import HeaderBar from '../nav/header-bar';

export default class ContactPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="home">
          <HeaderBar />
          <main role="main" className="main">
            <div className="main-content">
              <iframe
                title={'contact-form'}
                height={'657'}
                frameBorder={'0'}
                scrolling={'no'}
                style={{ width: '100%', border: 'none' }}
                src={'https://eyeobiz.wufoo.com/embed/m1vv8kc819dqr0o/'}
              />
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
