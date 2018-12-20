import React from 'react';
import { FUTURE_EVENTS, PAST_EVENTS } from '../event-actions';

export class EventListView extends React.Component {
  render() {
    const futureEventList = FUTURE_EVENTS.map(event => {
      return <li key={event.id}>{event.eventTitle}</li>;
    });

    const pastEventList = PAST_EVENTS.map(event => {
      return <li key={event.id}>{event.eventTitle}</li>;
    });

    return (
      <div className="list-nav">
        <ul className="future-list">
          <div className="future-hdr">How Long Until</div>
          {futureEventList}
        </ul>
        <ul className="past-list">
          <div className="past-hdr">How Long Since</div>
          {pastEventList}
        </ul>
      </div>
    );
  }
}

export default EventListView;
