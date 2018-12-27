import React from 'react';
import { connect } from 'react-redux';

import requiresLogin from '../../auth/requires-login';
import CreateEventForm from './createEventForm';
import { createEvent } from '../event-actions';

export class CreateEventView extends React.Component {
  createEvent(values) {
    this.props
      .createEvent({
        event: values,
        jwt: this.props.jwt
      })
      .then(event => {
        this.props.history.push(`/details/${event.id}`);
      });
  }

  render() {
    return (
      <main id="event-create">
        <h1>Create new Event</h1>
        <CreateEventForm onSubmit={this.createEvent.bind(this)} />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  jwt: state.auth.jwt
});

const mapDispatchToProps = {
  createEvent
};

export default requiresLogin(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateEventView)
);
