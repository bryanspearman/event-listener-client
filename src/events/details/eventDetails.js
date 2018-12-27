import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvent } from '../event-actions';
// import Counter from './counter';

export class EventDetails extends Component {
  componentDidMount() {
    this.props.getEvent({
      jwt: this.props.jwt,
      eventId: this.props.match.params.eventId
    });
  }

  render() {
    const { event } = this.props;
    if (!event) {
      return <p>Loading ...</p>;
    }
    return (
      <div id="event-details">
        <h1>{event.title}</h1>
        <span className="target-date">{event.targetDate}</span>>
        <div className="counter">Counter Placeholder</div>
        <div className="notes">
          <h2>Notes</h2>
            <p>{event.notes}</p>
        </div>
      </div>
    );
  }
  a;
}

const mapStateToProps = state => ({
  jwt: state.auth.jwt,
  event: state.event.eventDetails
});

const mapDispatchToProps = {
  getEvent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetails);
