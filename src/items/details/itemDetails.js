import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CounterView from '../../counter/counterView';
import { getItem } from '../item-actions';

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

    return (
      <div id="item-details">
        <CounterView targetDate={itemDate.toDateString()} />
        <h3>{dateIsInPast ? 'since' : 'until'}</h3>
        <h1>{selectedItem.itemTitle}</h1>
        <span className="item-date">{itemDate.toDateString()}</span>
        <div className="item-notes">
          <h2>Notes</h2>
          <p>{selectedItem.itemNotes}</p>
        </div>
        <Link to={`/dashboard/edit/${selectedItem.id}`}>Edit</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedItem: state.item.selectedItem
});

const mapDispatchToProps = {
  getItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetails);
