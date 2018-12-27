import React from 'react';
import { Link } from 'react-router-dom';
import { getEvents } from '../event-actions';
import { connect } from 'react-redux';

export class EventListView extends React.Component {
  componentDidMount() {
    this.props.getEvents();
  }

  renderEvent(event) {
    return (
      <Link to={`/event/${event.id}`}>
        <li data-event-id={event.id} key={event.id}>
          {event.eventTitle}
        </li>
      </Link>
    );
  }

  render() {
    return (
      <ul className="future-list">
        <div className="future-hdr">How Long Until</div>
        <li>Valentines Day</li>
        <li>Our Wedding Anniversary</li>
        <li>Thinkful Graduation</li>
        <li>Riley's Birthday</li>
        <li>Avery's Birthday</li>
        <li>Andrew's Birthday</li>
        <li>Anne's Birthday</li>
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  eventList: state.event.eventList
});

const mapDispatchToProps = {
  getEvents
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventListView);
