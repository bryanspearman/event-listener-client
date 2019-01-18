import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment-timezone';

import CounterView from '../../counter/counterView';
import { getItem, deleteItem } from '../item-actions';

export class ItemDetails extends React.Component {
  componentDidMount() {
    this.props.getItem(this.props.match.params.id);
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.getItem(this.props.match.params.id);
    }
  }

  dateIsInPast(testDate) {
    const now = new Date();
    return !!(testDate.getTime() < now.getTime());
  }

  render() {
    const { selectedItem } = this.props;
    if (!selectedItem) {
      return <p>Loading...</p>;
    }
    const itemDate = new Date(selectedItem.itemDate);
    const dateIsInPast = this.dateIsInPast(itemDate);
    const momentDate = new moment(selectedItem.itemDate).utc();

    return (
      <div id="item-details">
        <h1>{selectedItem.itemTitle}</h1>
        <CounterView targetDate={itemDate.toDateString()} />
        <div>{dateIsInPast ? 'Since: ' : 'Until: '}</div>
        <div className="item-date">
          {momentDate.format('ddd, MMMM Do YYYY')}
        </div>
        <div className="details-btns">
          <Link to={`/dashboard/edit/${selectedItem.id}`}>
            <button className="xsml-blu">Edit</button>
          </Link>
          <Link to={`/dashboard/delete/${selectedItem.id}`}>
            <button className="xsml-red">Delete</button>
          </Link>
        </div>
        <div className="item-notes">
          <h2>Notes</h2>
          <p>{selectedItem.itemNotes}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedItem: state.item.selectedItem
});

const mapDispatchToProps = {
  getItem,
  deleteItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetails);
